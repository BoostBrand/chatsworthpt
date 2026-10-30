// Web3Forms verifies hCaptcha on the server when hCaptcha is required in its dashboard.
// This module only manages the visitor's widget, validation and submission lifecycle.
type CaptchaApi = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string | number;
  getResponse: (id: string | number) => string;
  reset: (id: string | number) => void;
  remove?: (id: string | number) => void;
};
type CaptchaWindow = Window & { hcaptcha?: CaptchaApi; cptHcaptchaReady?: () => void };
type Options = { enabled: boolean; accessKey: string; onSuccess: (service: FormDataEntryValue | undefined) => void };

// Web3Forms' documented shared public hCaptcha sitekey for its free integration.
const CAPTCHA_SITEKEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2';
const CAPTCHA_SCRIPT = 'https://js.hcaptcha.com/1/api.js?onload=cptHcaptchaReady&render=explicit&recaptchacompat=off';
const LOAD_TIMEOUT = 15000;
const SEND_TIMEOUT = 20000;

export function setupBookingForms({ enabled, accessKey, onSuccess }: Options) {
  if (!enabled) return;
  const forms = Array.from(document.querySelectorAll<HTMLFormElement>('form.form[data-web3forms]'));
  if (!forms.length) return;
  const host = window as CaptchaWindow;
  let loader: HTMLScriptElement | undefined;
  let loadTimer: ReturnType<typeof setTimeout> | undefined;
  const states = forms.map((form) => ({
    form,
    widget: form.querySelector<HTMLElement>('[data-booking-captcha]')!,
    status: form.querySelector<HTMLElement>('[data-captcha-status]')!,
    retry: form.querySelector<HTMLButtonElement>('[data-captcha-retry]')!,
    id: null as string | number | null,
    tokenReady: false,
    sending: false,
    completed: false,
  }));
  type State = typeof states[number];

  const status = (state: State, message: string, retry = false) => {
    if (state.completed) return;
    state.status.textContent = message;
    state.retry.hidden = !retry;
  };
  const reset = (state: State) => {
    if (state.completed) return;
    state.tokenReady = false;
    try {
      if (state.id === null || !host.hcaptcha) throw new Error('Widget unavailable');
      host.hcaptcha.reset(state.id);
      status(state, 'Please complete the security check again.');
    } catch {
      status(state, 'The security check is unavailable. Retry it, or call (818) 749-3205.', true);
    }
  };
  const render = () => {
    if (!host.hcaptcha) return;
    clearTimeout(loadTimer);
    states.forEach((state) => {
      if (state.id !== null || state.completed) return;
      try {
        state.id = host.hcaptcha!.render(state.widget, {
          sitekey: CAPTCHA_SITEKEY,
          size: 'compact',
          theme: 'light',
          callback: () => { state.tokenReady = true; status(state, 'Security check complete.'); },
          'expired-callback': () => reset(state),
          'chalexpired-callback': () => { state.tokenReady = false; status(state, 'The security check expired. Please try it again.', true); },
          'error-callback': () => { state.tokenReady = false; status(state, 'The security check could not finish. Retry it, or call (818) 749-3205.', true); },
        });
        status(state, 'Complete the security check before sending.');
      } catch {
        status(state, 'The security check could not load. Retry it, or call (818) 749-3205.', true);
      }
    });
  };
  const loadFailed = () => {
    clearTimeout(loadTimer);
    states.forEach((state) => {
      if (state.id === null) status(state, 'The security check is taking longer to load. Retry it, or call (818) 749-3205.', true);
    });
  };
  const load = () => {
    if (host.hcaptcha) { render(); return; }
    clearTimeout(loadTimer);
    loader?.remove();
    states.forEach((state) => status(state, 'Loading security check…'));
    // Define the explicit-render callback before the asynchronous provider script.
    host.cptHcaptchaReady = render;
    loader = document.createElement('script');
    loader.src = CAPTCHA_SCRIPT;
    loader.async = true;
    loader.defer = true;
    loader.onerror = loadFailed;
    document.head.appendChild(loader);
    loadTimer = setTimeout(loadFailed, LOAD_TIMEOUT);
  };

  states.forEach((state) => {
    const { form } = state;
    const flag = (input: HTMLInputElement, message: string) => {
      const label = input.closest('label') as HTMLElement;
      input.setAttribute('aria-invalid', 'true');
      let error = label.querySelector('.err') as HTMLElement | null;
      if (!error) { error = document.createElement('small'); error.className = 'err'; error.setAttribute('role', 'alert'); label.appendChild(error); }
      error.textContent = message;
      label.classList.remove('invalid'); void label.offsetWidth; label.classList.add('invalid');
      const clear = () => { label.classList.remove('invalid'); input.removeAttribute('aria-invalid'); error?.remove(); input.removeEventListener('input', clear); };
      input.addEventListener('input', clear);
    };
    state.retry.addEventListener('click', () => {
      if (state.sending || state.completed) return;
      if (state.id !== null) reset(state);
      else load();
    });
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (state.sending || state.completed) return;
      const name = form.querySelector<HTMLInputElement>('input[name="name"]')!;
      const phone = form.querySelector<HTMLInputElement>('input[name="phone"]')!;
      const invalid: HTMLInputElement[] = [];
      if (!name.value.trim()) { flag(name, 'Please add your name.'); invalid.push(name); }
      if (!phone.value.trim()) { flag(phone, 'Please add a phone number so we can confirm your time.'); invalid.push(phone); }
      if (invalid.length) { invalid[0].focus(); return; }
      const data = Object.fromEntries(new FormData(form).entries());
      if (data.botcheck) return;
      let token = '';
      try { if (state.tokenReady && state.id !== null) token = host.hcaptcha?.getResponse(state.id) || ''; } catch { /* fail closed */ }
      if (!token) {
        status(state, 'Please complete the security check before sending. If it does not load, retry it or call (818) 749-3205.', true);
        state.widget.focus();
        return;
      }
      data['h-captcha-response'] = token;
      data.access_key = accessKey;
      const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), SEND_TIMEOUT);
      state.sending = true;
      button.disabled = true;
      button.setAttribute('aria-busy', 'true');
      form.querySelector('.form-error')?.remove();
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
          signal: controller.signal,
        });
        const result = await response.json().catch(() => ({}));
        if (response.status !== 200 || !result.success) throw new Error('Request failed');
        state.completed = true;
        try { onSuccess(data.service); } catch { /* analytics must not undo a confirmed booking request */ }
        const safe = name.value.replace(/[<>&]/g, '');
        try { if (state.id !== null) host.hcaptcha?.remove?.(state.id); } catch { /* success is already confirmed */ }
        form.innerHTML = '<div class="thanks" role="status"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle pathLength="1" cx="12" cy="12" r="10"/><path pathLength="1" d="m8 12.5 2.5 2.5L16 9.5"/></svg><h3>Request sent</h3><p>Thanks, ' + safe + '. We will call or email to confirm a time.</p></div>';
      } catch {
        let error = form.querySelector<HTMLElement>('.form-error');
        if (!error) { error = document.createElement('p'); error.className = 'form-error'; error.setAttribute('role', 'alert'); button.insertAdjacentElement('afterend', error); }
        error.textContent = 'Something went wrong sending your request. Please call (818) 749-3205.';
        reset(state);
      } finally {
        clearTimeout(timer);
        state.sending = false;
        button.disabled = false;
        button.removeAttribute('aria-busy');
      }
    });
  });
  load();
}
