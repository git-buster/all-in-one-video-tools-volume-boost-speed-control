# All-in-One Video Tools | Volume Boost & Speed Control

Publisher: [git-buster](https://github.com/git-buster)

A fully offline browser extension for controlling video playback speed and the current tab's audio volume. It does not require an account or a remote service.

## Features

- Adjust video playback speed from 0.25× to 16×. Presets: 1.25×, 1.5×, 2×, 2.5×, and 3×.
- Adjust extra tab volume from 0% to 1000%, without changing the website player's own volume. Presets: 200%, 500%, 600%, 800%, and 1000%.
- Restore speed to 1×, restore extra volume to 100%, reset both, or exit the controls.
- Keep the controls active after closing the popup. Reloading the page resets the settings.
- Use the interface in Simplified Chinese, Traditional Chinese, English, French, German, Spanish, Japanese, or Korean.

## Install from source

1. Open `edge://extensions` in Microsoft Edge or `chrome://extensions` in Chrome.
2. Enable Developer mode.
3. Select **Load unpacked** and choose the `plugin` folder in this repository.

The extension requires Chromium 116 or newer.

## Use

Open a regular webpage containing a video and click the extension icon. The popup displays the current website. Click **Allow access to this page** to enable video control on that tab. The extension begins processing tab audio only when extra volume differs from 100%.

The extension runs locally. It does not save recordings, upload website content or audio, use analytics, or contact a publisher-operated server. See the [privacy policy](PRIVACY.md) for the exact data handling and permissions.

High gain can distort audio. Browser-protected videos and some embedded players may limit control. While extra volume is active, some browsers may limit fullscreen video to the tab.

## Project files

- `plugin/`: installable extension source and bundled assets.
- `PRIVACY.md`: public privacy policy.

This repository contains the extension's runtime source, without local build notes, test files, historical archives, or store submission materials.
