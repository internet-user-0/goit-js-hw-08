const throttle = require('lodash.throttle');
import Player from '@vimeo/player';


const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);

player.on('timeupdate', throttle(onTimeupdate, 1000));

const currentTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(currentTime);

function onTimeupdate(data) {
   localStorage.setItem("videoplayer-current-time", data.seconds);
   console.log(data.seconds);
}