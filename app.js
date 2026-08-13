document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const loadingScreen = document.getElementById('loading-screen');
  const audioControls = document.getElementById('audio-controls');
  const muteBtn = document.getElementById('mute-btn');
  const bgMusic = document.getElementById('bg-music');
  const sceneEl = document.querySelector('a-scene');
  
  let isMuted = false;

  // Handle Start AR Button
  startBtn.addEventListener('click', () => {
    // Hide UI
    loadingScreen.style.display = 'none';
    audioControls.style.display = 'block';

    // Play music immediately since we aren't waiting for a target
    bgMusic.play().catch(e => console.log('Audio autoplay blocked', e));

    // Start WebXR AR Session if available
    if (sceneEl.is('vr-mode') || sceneEl.is('ar-mode')) return;
    
    if (sceneEl.hasLoaded) {
      enterAR();
    } else {
      sceneEl.addEventListener('loaded', enterAR);
    }
    
    function enterAR() {
      // Attempt to enter immersive AR mode (works on supported Android Chrome)
      if (sceneEl.xrSessionPromise || !navigator.xr) {
        // Fallback for iOS / non-WebXR browsers: the camera will just act as a magic window 
        // using device orientation controls built into a-camera.
        console.log("No WebXR found, falling back to magic window.");
      } else {
        sceneEl.renderer.xr.setSessionMode('immersive-ar');
        sceneEl.enterVR();
      }
    }
  });

  // Handle Mute Button
  muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    bgMusic.muted = isMuted;
    muteBtn.innerText = isMuted ? '🔇 Unmute' : '🎵 Mute';
  });
});
