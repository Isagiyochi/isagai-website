const video = document.getElementById('animeVideo');

function downloadVideo() {
    const a = document.createElement('a');
    a.href = video.src;
    a.download = 'white.mp4';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}