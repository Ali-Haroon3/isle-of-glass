# Isle of Glass public website

Live GitHub Pages site: https://ali-haroon3.github.io/isle-of-glass/

Flat ivory/ink/sea-glass design, original sunlit icon and island artwork, and actual iPhone simulator screenshots. Launch copy points to App Store app ID `6831862801`: `https://apps.apple.com/us/app/isle-of-glass/id6831862801`. The public U.S. listing was verified on November 8, 2026 (November 9 UTC), after Apple confirmed Ready for Distribution. Store listing verification does not claim an App Store download/install test. The initial iPhone release is free and United States-only, with no ads, subscriptions or paid hints. Campaign: 1,000 original puzzles, 25 shores. Community: separate live service, explicitly labeled studio starter content, optional profile, moderation, reports, blocks, deletion, private support.

The root game workspace retains source, screenshots and test evidence. This repository intentionally contains only public website files. Do not add credentials, private support messages, signing data, device identifiers or app build artifacts.

After changes, run `python3 Scripts/prepare_support_site.py` from the root game workspace. Publish with an ordinary commit/push to main, then verify the Pages deployment. Website screenshots must be recaptured from the app when the visible UI changes; do not repaint a screenshot to simulate a feature.

Artwork generation prompts and retained masters are documented in the parent workspace's Artwork/README.md. Island Atlas progress screenshot uses an isolated debug restoration fixture; gameplay and community captures show actual native UI. All user-facing features remain identical in Release; debug test routes are excluded.
