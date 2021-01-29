/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */

function togglePlay() {
	isVideoPaused();
	video.paused ? video.play() : video.pause();
}

function isVideoPaused() {
	video.paused ? toggle.innerHTML = 'pause' : toggle.innerHTML = 'play';
}

function skip() {
	const sec = +this.dataset.skip;
	console.log(video.currentTime += sec);
}

function handleRange(e) {
	video[this.name] = this.valueAsNumber;
}

function updatePrpgress() {
	const percent = video.currentTime / video.duration * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function handleProgressPosition(e) {
	const positionx = e.offsetX / progressBar.offsetWidth * video.duration;
	video.currentTime = positionx;
}

/* Hook up the event listeners */

video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updatePrpgress);
toggle.addEventListener('click', togglePlay);
document.addEventListener('keyup', (e) => (e.code === 'Space') &&togglePlay());
skipButtons.forEach((btn) => btn.addEventListener('click', skip));
ranges.forEach( (range) => range.addEventListener('change', handleRange))
ranges.forEach( (range) => range.addEventListener('mousemove', handleRange))


let mousedown = false;
progress.addEventListener('click', handleProgressPosition);
progress.addEventListener('mousemove', (e) => mousedown && handleProgressPosition(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

