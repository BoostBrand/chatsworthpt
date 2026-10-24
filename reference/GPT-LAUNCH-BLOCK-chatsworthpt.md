# Launch-day GPT block (ready 23 Oct 2026; give to Vlad only after his "go" and after the zone move is done)

Use only once: the chatsworthpt.com zone is Active in the Boost account (sales@boostbrandmarketing.com), GPT's
move report is checked, PREVIEW is false on main, the build is green and the push has deployed to the Pages
project chatsworthpt. Before handing it over, re-read GPT's cloudflare-move\report.txt and adjust step 2 to the
records it found (the apex and www records it lists).

Sources: the Pages custom domain facts were checked by the launch-brief session on 23 Oct 2026; the www redirect,
Always Use HTTPS and redirect-rule facts were read by this session on 23 Oct 2026.

---
PASTE THIS PROMPT
---
You are helping Vlad at Boost Brand Marketing launch the new Chatsworth Physical Therapy website. Vlad has said go.
Everything happens in Boost's Cloudflare account (sales@boostbrandmarketing.com). Work only on the zone
chatsworthpt.com and the Pages project chatsworthpt. Save notes in
C:\Users\Vlad\Projects\Chatsworth PT\cloudflare-move\launch-report.txt.

Rules
- Before you change or replace any DNS record, write its type, name, content and proxy status in launch-report.txt.
  That is the undo. Delete nothing else.
- Do not touch the WordPress host, Google Business Profile, Tag Manager, Clarity or email settings.
- If a screen does not match these steps, stop and report what you see.

1. Pages project chatsworthpt, Custom domains: set up chatsworthpt.com and let the dashboard add the DNS record
   itself. Do not add a CNAME by hand first: Cloudflare's Pages docs say that gives a 522 error
   (https://developers.cloudflare.com/pages/configuration/custom-domains/). If it says an existing record at
   chatsworthpt.com is in the way, write that record down, then let the dashboard replace it. Wait until the custom
   domain shows Active.
2. Send www to the apex with a 301, per Cloudflare's guide
   (https://developers.cloudflare.com/pages/how-to/www-redirect):
   a. Bulk Redirects: create a list with one entry: source www.chatsworthpt.com, target https://chatsworthpt.com,
      status 301, with Preserve query string, Subpath matching, Preserve path suffix and Include subdomains all on.
   b. Create a Bulk Redirect rule that uses that list.
   c. DNS: write down the current www record, then make www an A record to 192.0.2.1, Proxied.
3. SSL/TLS, Edge Certificates: make sure Always Use HTTPS is on (it sends every http visit to https;
   https://developers.cloudflare.com/ssl/edge-certificates/additional-options/always-use-https/). SSL/TLS, Overview
   must not be Off, or the switch is hidden (same source).
4. Check in a fresh browser window: https://chatsworthpt.com shows the new site (no yellow preview bar);
   https://www.chatsworthpt.com/about-us/ lands on https://chatsworthpt.com/about-us/; http://chatsworthpt.com lands
   on https. Note what you see.
5. Search Console, property sc-domain:chatsworthpt.com: Sitemaps, submit https://chatsworthpt.com/sitemap-index.xml.
6. Bing Webmaster Tools (sales@boostbrandmarketing.com): open the chatsworthpt.com site, click Verify (the meta tag is
   now live on the home page), then submit https://chatsworthpt.com/sitemap-index.xml.
7. Old sitemap list: if Claude asks for it, it is in the old export (cloudflare-move) or in Search Console, not on the
   live site any more.

Report back: each step's result, every record you replaced with its old value, the custom domain status, and
anything you could not do. Undo, if Vlad asks: remove chatsworthpt.com from the Pages project's Custom domains, put
back the apex and www records from launch-report.txt, and turn off the Bulk Redirect rule. The WordPress site was not
touched, so it answers again as soon as its records are back.
---

## Claude's checks after GPT reports (built-in browser, short JavaScript reads, no screenshots)
- 200, no noindex, canonical on https://chatsworthpt.com/: /, /back-pain-therapy/, /contact/, /conditions/sciatica/, /blog/.
- www.chatsworthpt.com/ answers 301 to https://chatsworthpt.com/.
- 301 from public/_redirects: /book-appointment/ to /contact/, /get-a-quote/ to /contact/, /blog-post-title-2/ to
  /blog/, /category/news/ to /blog/, /author/admin/ to /about-us/, /sitemap_index.xml to /sitemap-index.xml.
- 410 from functions/[[path]].js: /wp-login.php, /xmlrpc.php, /feed/.
- An unknown address gives the 404 page; robots.txt and /sitemap-index.xml load; HTTPS valid; the yellow preview bar
  is gone; the Bing msvalidate.01 tag is on the home page.
- Tracking: first visit shows the banner and no GA4, Clarity or Tag Manager request before a choice. With Vlad's yes:
  Accept All, all three load; fresh visit, Deny, none load. GPT or Windsor then confirms the visit in GA4.

## Decided in prep (23 Oct, Claude)
- The 301 map's query-string row (/?s=, /?p=N, /?page_id=N, /?attachment_id=N to /): no redirect rule at launch. On
  Pages these addresses serve the homepage, whose canonical names https://chatsworthpt.com/, so Google folds them
  into the homepage. None appears in the Search Console URL list the blueprint used. Add a redirect rule only if
  Search Console later shows them.
- Roadmap T-009 (the three 2020 fitness-trainer post slugs and the Windows 10 activator slug): the live sitemap is
  behind Cloudflare's security check in the personal zone (built-in browser, 23 Oct 8:20pm: "Performing security
  verification", not passed, left alone). Retry the read after the zone move, before launch; the move does not copy
  that security setting.
