function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    audio.play();
}
