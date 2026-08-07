document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.3;

    function unmuteAudio() {
        audio.muted = false;
        audio.play();
        document.removeEventListener('click', unmuteAudio);
        document.removeEventListener('scroll', unmuteAudio);
        document.removeEventListener('keydown', unmuteAudio);
    }

    document.addEventListener('click', unmuteAudio);
    document.addEventListener('scroll', unmuteAudio);
    document.addEventListener('keydown', unmuteAudio);

    const circle = document.querySelector('.circle');
    circle.addEventListener('click', () => {
        audio.muted = !audio.muted;
        audio.play().catch(err => console.log('Playback blocked:', err));
    });
});