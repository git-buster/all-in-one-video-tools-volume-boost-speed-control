# Privacy Policy — All-in-One Video Tools

**Publisher:** [git-buster](https://github.com/git-buster)  
**Effective date:** 2026-09-28  
**Contact:** [GitHub Issues](https://github.com/git-buster/all-in-one-video-tools-volume-boost-speed-contro/issues)

This policy describes how the All-in-One Video Tools browser extension handles data. The extension operates locally in the browser and does not require an account.

## Data used for the requested controls

When you open the extension popup, it reads the active tab's URL to display the current website and check whether its controls are already active on that tab. Opening the popup alone does not inject a new control script or start audio capture.

After you click **Allow access to this page**, the extension injects its bundled script into the current tab. The script finds video elements to adjust their playback speed and count them for the popup. It does not read page text, form entries, passwords, or browsing history.

When extra volume is set to a value other than 100%, the extension temporarily captures the current tab's audio, adjusts it in memory with the browser's Web Audio API, and plays it through your speakers. This can include any sound produced by that tab. Capture stops when you restore 100%, click Exit, or navigate away from the page. The extension does not record or save the audio.

The extension reads your browser's language setting to choose an initial interface language. It stores only your selected interface language in the browser's local extension storage. Playback speed and extra volume settings remain in the page or temporary extension memory and reset when the page reloads.

## Data sharing and network use

The extension does not upload audio, website content, visited URLs, or usage data. It has no analytics, advertisements, remote code, or publisher-operated network service. It does not sell or share user data with third parties. Websites you visit may make their own network requests independently of the extension.

## Permissions and user controls

The extension requests `activeTab` to identify the tab you open it on, `scripting` to add its bundled video-control script after you allow access, `tabCapture` to adjust that tab's audio, and `offscreen` to keep local audio processing active after the popup closes. It does not request persistent access to every website.

You can restore speed to 1× or extra volume to 100%, reset both settings, click Exit, reload the page, disable the extension, or uninstall it. Uninstalling removes extension-local data according to the browser's data handling.

For questions about this policy, use the contact link above. Please do not post private information in a public issue. If the extension's data practices change, this policy will be updated before the changed version is published.
