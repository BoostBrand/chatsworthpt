You are taking over the Chatsworth Physical Therapy website rebuild (chatsworthpt.com; client Dr. Edward Shut, DPT) for Vlad at Boost Brand Marketing. The new site is built, checked and running as a private preview at https://chatsworthpt.pages.dev/. Your job: get it ready to launch, launch it on Vlad's go, and check it is right afterwards. Talk to Vlad in plain words, with no code, file paths or tool names in status updates, and no em or en dashes anywhere.

Read first, in this Project: claude/HANDOFF-chatsworthpt-next-session.md (the top status block) and the last three sections of claude/BUILD-LOG-chatsworthpt.md.

Rules
- Never delete. Move files to _holding/<reason>/ and say so.
- Facts come only from the Project docs and the repo. Anything new is a question for Vlad.
- Approved copy (the homepage and the six deck pages) is not rewritten without Vlad's yes.
- DO NOT MODIFY these protected values. They live only in src/data/site.ts: GA4 property 469861709, measurement ID G-ZQ3F4WQ8GN, Clarity z1ujczxp26, the Web3Forms key, Tag Manager GTM-MTLHQPDR, the Bing tag 854018C13E47A8134B68B1EB7F13A7DC, cookie banner settings ID qH0BCcOkhR_sVA, and the four Termageddon keys.
- Nothing goes to Dr. Ed or the client without Vlad's yes. No Google Business Profile changes.
- No DNS or custom domain change, and PREVIEW stays true, until Vlad writes "go" in chat.
- Dashboard work (Cloudflare, Search Console, Bing, Analytics) goes to GPT. Give Vlad one clearly labelled paste block for GPT, then work from GPT's reply. Every outside fact in a GPT block carries its source or is labelled unverified.
- Browser checks: Vlad's team uses Chrome (the extension). If two Chrome browsers are connected, ask Vlad which one; the built-in browser also works. The sandbox cannot reach pages.dev or chatsworthpt.com, so check with short JavaScript reads, not screenshots. Don't click Accept on the cookie banner without Vlad's yes.
- If a step fails or you would have to guess, stop that step, write the question down, and go on with the next step that does not depend on it.

Step 1. Repo
1. Attach BoostBrand/chatsworthpt with push access and clone it (branch main). If attaching fails: GitHub labels BoostBrand a personal account, and the Claude app's access is under Settings > Integrations > Applications > Installed GitHub Apps > Claude > Configure.
2. Run npm ci, npm run build, npm run gates. Expect 53 pages, 0 hard gates failing, 52 sitemap URLs, noindex 1 (the 404), markers 0, PHOTO placeholders 0. Stop and report if anything differs.

Step 2. Open item
1. Dr. Ed said he would get back about the About paragraph. Check whether he answered (his email replies reach the JenErg mailbox). Report it. Send nothing.
2. Ask Vlad whether the site can launch before that answer.

Step 3. Launch prep (look only, through GPT)
Give Vlad a GPT block asking GPT to report, changing nothing:
a. Which Cloudflare account holds the chatsworthpt.com zone, its nameservers, and whether it is the same account as the Pages project chatsworthpt (sales@boostbrandmarketing.com). Why it matters: Cloudflare's Pages docs say an apex custom domain "must be a zone on the Cloudflare account you have created your Pages project on", with Cloudflare nameservers (https://developers.cloudflare.com/pages/configuration/custom-domains/).
b. Every DNS record for chatsworthpt.com and www (type, name, content, proxied or not), written down so launch can be undone. In particular: the apex and www records that point to the WordPress host; the google-site-verification TXT record (Search Console's Domain property is verified through DNS and must keep it: https://support.google.com/webmasters/answer/9008080); MX records; any CAA records (the same Cloudflare page says CAA records that don't allow Cloudflare to issue a certificate can block the custom domain).
c. Where the WordPress site is hosted, so it stays up and untouched as the fallback.
Then give Vlad the launch plan in plain words, including how to undo it, and wait for "go".

Step 4. Launch, only after Vlad writes "go"
1. Set PREVIEW to false in src/data/site.ts. Build, run the gates (the ship gate needs 0 markers), commit "Launch: preview mode off", push.
2. GPT block for Vlad: in the Pages project chatsworthpt, Custom domains, set up chatsworthpt.com and let the dashboard add the record (Cloudflare's docs say adding the CNAME by hand first causes a 522 error). Then send www to the apex with a 301, per Cloudflare's guide (https://developers.cloudflare.com/pages/how-to/www-redirect/): a Bulk Redirect list (source www.chatsworthpt.com, target https://chatsworthpt.com, status 301, preserve query string, subpath matching, preserve path suffix, include subdomains), a Bulk Redirect rule that uses it, and a proxied A record www to 192.0.2.1. GPT writes down every record it replaces, with the old values, before changing it. If the zone is not in the Pages project's account, stop: that needs Vlad's decision first.
3. Verify in the browser: the home page and four inner pages answer 200, with no noindex and a canonical on https://chatsworthpt.com/; www answers 301 to the apex; six old addresses from public/_redirects answer 301 to the right page; three addresses handled by functions/[[path]].js answer 410; an unknown address gives the 404 page; robots.txt and /sitemap-index.xml load; HTTPS is valid; the yellow preview bar is gone.
4. Tracking on the real domain: a first visit shows the cookie banner, and no Analytics, Clarity or Tag Manager script loads before a choice. With Vlad's yes, click Accept All and check that all three load; then click Deny in a fresh visit and check that none load. Ask GPT to confirm the visit in Analytics Realtime.
5. GPT block: Search Console, submit https://chatsworthpt.com/sitemap-index.xml. Bing, click Verify (the tag is live now) and submit the same sitemap.
6. A test booking on the real domain sends an email to Dr. Ed's inbox, so only with Vlad's yes.
7. Suggest to Vlad (his call): a Termageddon rescan to drop Google Fonts and Google Maps from the cookie banner list, since the new site uses neither.

Step 5. Records
1. Update BUILD-LOG.md and reference/HANDOFF-chatsworthpt-next-session.md in the repo, and the Project copies (claude/BUILD-LOG-chatsworthpt.md and claude/HANDOFF-chatsworthpt-next-session.md). Commit and push.
2. Report to Vlad in plain words: what is live, what was checked, what is still waiting.

Do not summarise this prompt back; begin with Step 1.
