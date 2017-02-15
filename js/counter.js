var timerId;
var hour = 0;
var min = 0;
var sec = 0;
var mSec = 0;
var flag = true;
var display = document.querySelector('input');
var buttonList = document.querySelectorAll('button');

buttonList[0].addEventListener('click', startStop);
buttonList[1].addEventListener('click', split);
buttonList[2].addEventListener('click', reset);

function numberStyle() {
	var newHour = 0;
	var newMin = 0;
	var newSec = 0;
	var newMSec = 0;
	
	if ((mSec >= 10) && (mSec < 100)) {
		newMSec = '0' + mSec;
	} else {
		if (mSec < 10) {
			newMSec = '00' + mSec;
		} else newMSec = mSec;
	}
	if (sec < 10) {
		newSec = '0' + sec;
	} else newSec = sec;
	if (min < 10) {
		newMin = '0' + min;
	} else newMin = min;
	if (hour < 10) {
		newHour = '0' + hour;
	} else newHour = hour;

	var result =  newHour + ':' + newMin + ':' + newSec + '.' + newMSec ;
	return result;
}

function count() {
	mSec += 4;
	if (mSec >= 999){
		mSec = 0;
		sec++;
	}
	if (sec == 60) {
		sec = 0;
		min++;
	}
	if (min == 60) {
		min = 0;
		hour++;
	}
	var time = numberStyle();
	display.value = time;
}

function timerLog (title) {
	if (flag == true) {
		var orderedList = document.createElement('ol')
		var body = document.querySelector('body');
		body.appendChild(orderedList)
		flag = false;
	}
	var time = numberStyle();
	var listItem = document.createElement('li');
	listItem.innerHTML = title + ': ' + time;

	var newList = document.querySelector('ol');
	newList.appendChild(listItem);
}

function startStop(){
	if (buttonList[0].innerHTML == 'Start'){
	buttonList[0].innerHTML = 'Stop';
	timerId = setInterval(count, 4);
	console.log(timerId);
	} else {
		buttonList[0].innerHTML = 'Start';
		clearInterval(timerId);
		timerLog('Stop');
	}
}

function split(){
	timerLog('Split');
}

function reset(){
	buttonList[0].innerHTML = 'Start';
	clearInterval(timerId);
	hour = 0;
	min = 0;
	sec = 0;
	mSec = 0;
	flag = true;
	display.value = '00:00:00.000';
	var body = document.querySelector('ol');
	var list = document.querySelectorAll('li');
	for (var i = 0; i < list.length; i++){
	body.removeChild(list[i]);
	}
}


