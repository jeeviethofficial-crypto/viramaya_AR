# Pirate WebAR Treasure

A WebAR experience using MindAR and A-Frame. Point your camera at a specific logo to reveal a 3D pirate treasure!

## Setup & Assets

To get this project working with your custom logo and 3D models:

1. **Generate Image Target (`targets.mind`)**
   - Go to the [MindAR Image Target Compiler](https://hiukim.github.io/mind-ar-js-doc/tools/compile)
   - Upload your `logo-marker.png` (the SLIIT logo).
   - Click "Start" and wait for the compilation.
   - Download the generated `.mind` file and rename it to `targets.mind`.
   - Place this file in `assets/targets/targets.mind`.

2. **Add 3D Models**
   - Find or create a GLTF/GLB 3D model of a treasure chest (e.g., from Sketchfab).
   - Place the model in `assets/models/chest.glb`.
   - Update `index.html` if the filename differs.

3. **Add Audio**
   - Place a short, compressed background music file in `assets/audio/pirate-music.mp3`.

## Local Testing

Due to browser security restrictions, WebAR (and accessing the camera) requires a secure context (`https://`) or `localhost`. 
- You can test locally using VS Code's "Live Server" extension, or run a simple local HTTP server (e.g., `npx http-server`).
- On mobile devices, you must access it over HTTPS (or use port forwarding/Ngrok).

## Deployment (GitHub & Netlify)

This project consists of pure static files and requires no build step.

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial WebAR commit"
git branch -M main
# Create a repository on GitHub and link it:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### 2. Deploy to Netlify
1. Log in to [Netlify](https://app.netlify.com/).
2. Click **"Add new site"** -> **"Import an existing project"**.
3. Select **GitHub** and authorize access.
4. Choose your newly created repository.
5. In the build settings, leave the "Build command" and "Publish directory" **blank** (or set publish directory to `/`).
6. Click **"Deploy site"**.
7. Netlify will automatically provide an HTTPS URL, which is **required** for camera access on mobile devices!

## Features included
- A-Frame and MindAR for target-based image tracking
- Pirate-themed UI overlay with custom font
- iOS Safari compatibility (requires user interaction to start audio/video)
- Fallback message for unsupported browsers
# viramaya_AR
