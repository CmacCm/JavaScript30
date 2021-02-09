



const showTime = document.querySelector('.display__time-left')
const showEstTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('button');
let countdown;

function displaySecs(timeInSeconds) {
	clearInterval(countdown);
	const nowInSec = Math.floor(Date.now()/1000);
	const then = timeInSeconds + nowInSec;
	displayTime(timeInSeconds, then);

	countdown = setInterval(() => {
		const secRemain = then - Math.floor(Date.now()/1000);
		if(secRemain < 0) {
			clearInterval(countdown);
			return
		};
		displayTime(secRemain, then);
	}, 1000);
}

function displayTime(secsToCountdown, finalTime) {  // secsToCountdown in seconds

	const timeObj = new Date(finalTime * 1000)
	showTime.innerText = sec2time(secsToCountdown);
	showEstTime.innerText = ` ${addZero(timeObj.getHours())}:${addZero(timeObj.getMinutes())}:${addZero(timeObj.getSeconds())}`;
}

buttons.forEach(button => button.addEventListener('click', function() {
	const time = +this.dataset.time;
	displaySecs(time);
}))

// if we have an element with a name in html we can simpy get it with its name after document
document.customForm.addEventListener('submit', function(e) {  
	e.preventDefault();

	// same here, we just get input element with its name
	const time = Math.floor(this.minutes.value) * 60;
	console.log(time)
	if ((/^\d+$/.test(time))) {  //check for positive numbers with reg exp
		displaySecs(time);
	} else {
		clearInterval(countdown);
		showTime.innerText = 'Enter a proper number value, please';
		showEstTime.innerText = '';
	}
	this.reset();
})


function sec2time(timeInSeconds) {
	hours = Math.floor(timeInSeconds / 60 / 60),
	minutes = Math.floor(timeInSeconds / 60) % 60,
	seconds = timeInSeconds % 60;
	// const addZero = time => time < 10 ? '0' + time : '' + time;
	return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}

// another approach of adding zero if less than 10 with external function for function sec2time

function addZero(time) {
	return `${time < 10 ? "0" : ''}${time}`
}


