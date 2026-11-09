# Isle of Glass public website

Primary website: https://isleofglass.app/

Legacy GitHub Pages paths: https://ali-haroon3.github.io/isle-of-glass/

Flat ivory/ink/sea-glass design, original sunlit icon and island artwork, and actual iPhone simulator screenshots. Launch copy points to App Store app ID `6831862801`: `https://apps.apple.com/us/app/isle-of-glass/id6831862801`. The public U.S. listing was verified on November 8, 2026 (November 9 UTC), after Apple confirmed Ready for Distribution. Store listing verification does not claim an App Store download/install test. The initial iPhone launch was free and United States-only. The current rollout selects 146 countries/regions; availability varies by country. There are no ads, subscriptions or paid hints. Campaign: 1,000 original puzzles, 25 shores. Community: separate live service, explicitly labeled studio starter content, optional profile, moderation, reports, blocks, deletion, private support.

The root game workspace retains source, screenshots and test evidence. This repository intentionally contains only public website files. Do not add credentials, private support messages, signing data, device identifiers or app build artifacts.

Maintain the three legacy redirects directly; do not overwrite them by rerendering the original landing page. Publish with an ordinary commit/push to main, then verify the Pages deployment. Website screenshots must be recaptured from the app when the visible UI changes; do not repaint a screenshot to simulate a feature.

Artwork generation prompts and retained masters are documented in the parent workspace's Artwork/README.md. Island Atlas progress screenshot uses an isolated debug restoration fixture; gameplay and community captures show actual native UI. All user-facing features remain identical in Release; debug test routes are excluded.

## Custom-domain transition

The three HTML pages contain redirects to `https://isleofglass.app/`, `/support.html`, and `/privacy.html`, respectively. Each retains its original page body and a visible destination link as a fallback. This is a static HTML refresh (HTTP 200), not a server-side 301. No CNAME is added: Sites hosts the custom domain. Root verified registration and HTTPS for all three apex pages on November 9, 2026 before authorizing this publication. The original bodies remain available when automatic refresh is disabled, including the old host’s privacy disclosures. Installed app versions using the old support/privacy paths can continue to reach the corresponding pages.
