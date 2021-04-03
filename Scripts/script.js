let backward = document.getElementById("backward");
let stop = document.getElementById("stop");
let play = document.getElementById("play");
let forward = document.getElementById("forward");
let range = document.getElementById("range");
let audio = document.getElementById("audio");
let chooseMusic = document.getElementsByClassName("music");
let image = document.getElementById("image");

let musicList = [
    {
        name: "Acoustic Breeze",
        audioPath: "./Assets/Audio/bensound-acousticbreeze.mp3",
        albumPhoto: "./Assets/Images/acousticbreeze.jpeg"
    },
    {
        name: "Creative Minds",
        audioPath: "./Assets/Audio/bensound-creativeminds.mp3",
        albumPhoto: "./Assets/Images/creativeminds.jpeg"
    },
    {
        name: "Jazzy French",
        audioPath: "./Assets/Audio/bensound-jazzyfrenchy.mp3",
        albumPhoto: "./Assets/Images/jazzyfrenchy.jpeg"
    }
]

play.addEventListener("click", playMusic);

function playMusic() {
    if (audio.paused) {
        play.classList.replace("fa-play-circle", "fa-pause-circle");
        audio.play();
    } else {
        play.classList.replace("fa-pause-circle", "fa-play-circle");
        audio.pause();
    }
}

stop.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    play.classList.replace("fa-pause-circle", "fa-play-circle");
})

backward.addEventListener("click", () => {
    audio.currentTime -= 10;
})

forward.addEventListener("click", () => {
    audio.currentTime += 10;
})

range.addEventListener("input", () => {
    audio.currentTime = range.value;
})

function timeBar() {
    range.setAttribute("max", audio.duration);
    range.value = audio.currentTime;
}

setInterval(timeBar, 1000);

for (let i = 0; i < chooseMusic.length; i++) {
    chooseMusic[i].addEventListener("click", () => {
        audio.src = musicList[i]["audioPath"];
        image.src = musicList[i]["albumPhoto"];
        playMusic();
    })
}