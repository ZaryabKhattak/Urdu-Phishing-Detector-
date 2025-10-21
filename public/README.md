# Public Assets

This directory contains static assets that will be served directly without processing by Vite.

## Contents

Place the following types of files here:
- Favicon and app icons
- Images that don't need processing
- Static JSON files
- robots.txt
- manifest.json

## Usage

Files in this directory can be referenced directly:
```html
<img src="/logo.png" alt="Logo" />
```

Note: Do not import these files in your JavaScript/JSX code. Use the public path directly.
