var video = document.getElementById('video');

play.addEventListener('click', () => {
    if (video.paused)
        video.play();
    else
        video.pause();
});


var recargar = document.getElementById('recargar');

recargar.addEventListener('click', () => {
    video.load();
});

var completo = document.getElementById('completo');
completo.addEventListener('click', () => {
    video.requestFullscreen();
})