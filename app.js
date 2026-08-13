document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const loadingScreen = document.getElementById('loading-screen');
  const audioControls = document.getElementById('audio-controls');
  const muteBtn = document.getElementById('mute-btn');
  const bgMusic = document.getElementById('bg-music');
  const targetEntity = document.getElementById('target-entity');
  
  let isMuted = false;
  let arStarted = false;

  // Handle Start AR Button
  startBtn.addEventListener('click', () => {
    // Hide UI
    loadingScreen.style.display = 'none';
    audioControls.style.display = 'block';
    arStarted = true;
  });

  // Handle Mute Button
  muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    bgMusic.muted = isMuted;
    muteBtn.innerText = isMuted ? '🔇 Unmute' : '🎵 Mute';
  });

  // MindAR Events
  targetEntity.addEventListener('targetFound', () => {
    console.log('Target found! The pirate treasure appears!');
    if (arStarted) {
      bgMusic.play().catch(e => console.log('Audio autoplay blocked', e));
    }
  });

  targetEntity.addEventListener('targetLost', () => {
    console.log('Target lost.');
    if (arStarted) {
      bgMusic.pause();
    }
  });
  
  // Basic check for supported browsers (camera permissions context)
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    document.getElementById('fallback-message').style.display = 'block';
  }
});
