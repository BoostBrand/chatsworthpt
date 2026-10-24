# Launch-day GPT block (ready 23 Oct 2026; give to Vlad only after his "go" and after the zone move is done)

Use only once: the chatsworthpt.com zone is Active in the Boost account (sales@boostbrandmarketing.com), GPT's
move report is checked, PREVIEW is false on main, the build is green and the push has deployed to the Pages
project chatsworthpt. Before handing it over, re-read GPT's cloudflare-move\report.txt and adjust step 2 to the
records it found (the apex and www records it lists).

Move done 23 Oct 2026, 9:49pm Pacific (GPT, cloudflare-move\report.txt): zone Active on Free in account
cfe2da24c9f3664bf54475f308ad2e7e, nameservers clara and earl at GoDaddy, all 14 records identical to the old export
(Claude's own diff agrees), SSL Full (manual), Always Use HTTPS off, Under Attack Mode ON (Vlad approved keeping it
during the move). Apex and www are A 35.215.84.147 (SiteGround), proxied. GPT's report does not show that it checked
the Pages project sits in that same account, so step 0 below does it.

Also wait until public DNS has settled: at 24 Oct 05:01 UTC dns.google returned clara and earl, but
cloudflare-dns.com still returned the old ben and liv (TTL 86400). Launch once both return clara and earl (check
with the dns.google and cloudflare-dns.com JSON endpoints in the built-in browser), or visitors and Google may still
reach the old zone's copy of WordPress for a while.

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
- Do not change the WordPress host, Google Business Profile, Tag Manager, Clarity or email settings. Reading them is fine.
- If a screen does not match these steps, stop and report what you see.

0. Confirm the Pages project chatsworthpt (chatsworthpt.pages.dev) is listed in this same account, ID
   cfe2da24c9f3664bf54475f308ad2e7e (its Workers & Pages list; menu name unverified). An apex custom domain must be a
   zone on the account that holds the Pages project (https://developers.cloudflare.com/pages/configuration/custom-domains/).
   If chatsworthpt is not there, stop and report. Change nothing.
0b. Read only: in SiteGround Site Tools or the WordPress admin, list every published post and page with its address
   and date, and save it as old-wordpress-posts.txt in the same folder. Claude needs three 2020 fitness trainer post
   addresses and the February 2026 Windows 10 activator post address. Change nothing there.
0c. Turn off I'm Under Attack Mode for chatsworthpt.com (Vlad's yes comes with his go; it is the switch you turned
   on during the move). The new site is static, and with the mode on every visitor, Bing and Google would meet a
   security check page first.
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
   c. DNS: write down the current www record (the move report shows A 35.215.84.147, proxied), then make www an A
      record to 192.0.2.1, Proxied.
3. SSL/TLS, Edge Certificates: make sure Always Use HTTPS is on (it sends every http visit to https;
   https://developers.cloudflare.com/ssl/edge-certificates/additional-options/always-use-https/). SSL/TLS, Overview
   must not be Off, or the switch is hidden (same source).
4. Check in a fresh browser window: https://chatsworthpt.com shows the new site (no yellow preview bar);
   https://www.chatsworthpt.com/about-us/ lands on https://chatsworthpt.com/about-us/; http://chatsworthpt.com lands
   on https. Note what you see.
5. Search Console, property sc-domain:chatsworthpt.com: Sitemaps, submit https://chatsworthpt.com/sitemap-index.xml.
6. Bing Webmaster Tools (sales@boostbrandmarketing.com): open the chatsworthpt.com site, click Verify (the meta tag is
   now live on the home page), then submit https://chatsworthpt.com/sitemap-index.xml.

Report back: each step's result, every record you replaced with its old value, the custom domain status, and
anything you could not do. Undo, if Vlad asks: remove chatsworthpt.com from the Pages project's Custom domains, put
back the apex and www records from launch-report.txt, turn off the Bulk Redirect rule, and turn Under Attack Mode
back on if Vlad wants it for the WordPress site. The WordPress site was not
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
  behind Cloudflare's Under Attack Mode (built-in browser, 23 Oct 8:20pm: "Performing security verification", not
  passed, left alone), and Vlad kept the mode on in the Boost zone. GPT reads the post list from WordPress itself in
  step 0b; Claude adds the 301 and 410 lines right after launch (none of these addresses has Search Console
  impressions, so a few hours of 404 costs nothing).
- Email: the MX records point to SiteGround's mail filter (mailspamprotection.com; GPT matched SiteGround's mail
  docs). Do not cancel SiteGround after launch until someone checks whether any @chatsworthpt.com mailbox is in use.
