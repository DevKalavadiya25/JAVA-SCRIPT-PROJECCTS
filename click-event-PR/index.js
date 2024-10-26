let currentAudio = null;

    function playSound(audioId) {
        if (currentAudio && !currentAudio.paused) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = document.getElementById(audioId);
        currentAudio.play();
    }