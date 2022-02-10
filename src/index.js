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

function skip() {
    $('.skip_button').on('click', function() {
        var vid = $("#video1")[0];
        var vidDuration = Math.floor(vid.duration);
        skipTime(vidDuration);
        console.log(vidDuration);

    })

}

function skipTime(time) {
    var vid = $("#video1")[0];
    vid.play();
    vid.pause();
    vid.currentTime = time;
    vid.play();
    console.log(vid.duration);
};

$(function() {

    skip();


});