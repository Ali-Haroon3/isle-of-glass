# Isle of Glass public website

Live GitHub Pages site: https://ali-haroon3.github.io/isle-of-glass/

Flat ivory/ink/sea-glass design, original sunlit icon and island artwork, and actual iPhone simulator screenshots. The app is being prepared for App Store release; this website does not claim approval or offer an unavailable download. Campaign:1,000 original puzzles,25shores. Community: separate live service, explicitly labeled studio starter content, optional profile, moderation, reports, blocks, deletion, private support.

The root game workspace retains source, screenshots and test evidence. This repository intentionally contains only public website files. Do not add credentials, private support messages, signing data, device identifiers or app build artifacts.

After changes, run `python3 Scripts/prepare_support_site.py` from the root game workspace. Publish with an ordinary commit/push to main, then verify the Pages deployment. Website screenshots must be recaptured from the app when the visible UI changes; do not repaint a screenshot to simulate a feature.

Artwork generation prompts and retained masters are documented in the parent workspace's Artwork/README.md. Island Atlas progress screenshot uses an isolated debug restoration fixture; gameplay and community captures show actual native UI. All user-facing features remain identical in Release; debug test routes are excluded.
