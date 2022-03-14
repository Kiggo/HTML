var hour = 0;
var min = 0;
var sec = 0;


function start() {
	var time = document.getElementById('time');


	time.innerHTML = (hour < 10 ? '0' + hour : hour) + ':'
			+ (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec);
	sec++;


	if (sec >= 60) {
		sec = 0;
		min++;
		if (min >= 60) {
			min = 0;
			hour++;
		}


	}
	timer = setTimeout(start, 1000);
}
function stop() {
	clearTimeout(timer);
}
function reset() {
	clearTimeout(timer);
	hour = 0;
	min = 0;
	sec = 0;
	time.innerHTML = "00:00:00";
}