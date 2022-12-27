const playbutton = document.getElementById('playbutton');
const pausebutton =  document.getElementById('pausebutton');
const prevbutton =  document.getElementById('backbutton');
const nextbutton =  document.getElementById('nextbutton');
const title = document.getElementById('title');
const audio = document.getElementById('audio');

const songs =['aahatein','angel baby','btbt','dna','him and i','junoon','keep me up','mujhko barsaat bana lo','muskarahat','older','sach keh rahan h deewana','shinunoga-e-wa','shut down','tu zaroori'];

let songsIndex=songs.length-1;

loadSong(songs[songsIndex]);

function loadSong(song){
    title.innerHTML = song;
    audio.src= `music/${song}.mp3`;
}
                                                                                                                                                                               
function playSong(){
    audio.play();
}

function prev(){
    --songsIndex;
    if(songsIndex<0){
        songsIndex=songs.length-1;
    }
    loadSong(songs[songsIndex]);

    playSong();
}

function next(){
    ++songsIndex;

    if(songsIndex>songs.length-1){
        songsIndex=0;
    }
    loadSong(songs[songsIndex]);

    playSong();
}
function play(){

    playSong();
}

function pause(){
    audio.pause();
}
audio.addEventListener('ended',next);
prevbutton.addEventListener('click',prev); 
nextbutton.addEventListener('click',next);
pausebutton.addEventListener('click',pause);
playbutton.addEventListener('click',play);
