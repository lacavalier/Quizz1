let player = document.querySelector(".player");
let playBtn = document.querySelector(".play");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let shuffleBtn = document.querySelector(".shuffle");
let progress_container = document.querySelector(".progress_container");
let progress = document.querySelector(".progress");
let title1 = document.querySelector(".song");
let cover = document.querySelector(".cover_img");
let imgSrc = document.querySelector(".img_src");
let audio = document.querySelector(".audio");

// названия
const songs = [
  "Lenny Kravitz - Low",
  "Speed of sound",
  "Depeche Mode - Dream on",
  "Depeche Mode - Never let me down again",
];

// пенся по умол
let songIndex = 0;

/// init

function loadsong(song) {
  title1.innerHTML = song;
  audio.src = `songs/${song}.mp3`;
}

loadsong(songs[songIndex]);

function playSong() {
  player.classList.add("play");
  cover.classList.add("active");
  imgSrc.src = "./audioimage/pause.png";
  audio.play();
}

function Pausesong() {
  player.classList.remove("play");
  cover.classList.remove("active");
  imgSrc.src = "./audioimage/play.png";
  audio.pause();
}

playBtn.addEventListener("click", () => {
  const isPlay = player.classList.contains("play");
  if (isPlay) {
    Pausesong();
  } else {
    playSong();
  }
});

//
function Nextsong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadsong(songs[songIndex]);
  playSong();
}

nextBtn.addEventListener("click", Nextsong);

function Prevsong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadsong(songs[songIndex]);
  playSong();
}

prevBtn.addEventListener("click", Prevsong);

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

audio.addEventListener("timeupdate", updateProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}
progress_container.addEventListener("click", setProgress);

audio.addEventListener("ended", Nextsong);

function SHuff() {
  songs.sort(() => Math.random() - 0.5);
  return songs;
}

shuffleBtn.addEventListener("click", SHuff());
