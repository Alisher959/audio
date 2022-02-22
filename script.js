let sound = document.getElementById('audio');

function playAudio(){
    sound.play();
    document.getElementById('playAudiobtn').style.color='#cc0001';
    document.getElementById('playPausebtn').style.color='#fff';
    document.getElementById('heading').style.color='#b28d3b';
}
function pauseAudio(){
    sound.pause();
    document.getElementById('playPausebtn').style.color='#cc0001';
    document.getElementById('playAudiobtn').style.color='#fff';
    document.getElementById('heading').style.color='#000';
}