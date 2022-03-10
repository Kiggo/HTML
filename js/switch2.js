var year = Number(prompt('년을 입력하시오: '));
var month = Number(prompt('달을 입력하시오: '));
switch (month) {
case 2:
	if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) { // year=2016%4
		days = 29;
	} else {
		days = 28;
	}
	break;
case 4:
case 6:
case 9:
case 11:
	days = 30;
	break;
default:
	days = 31;
	break;
}
alert(month + '월의 일수는 ' + days + ' 입니다');
