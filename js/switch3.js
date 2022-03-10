var num1 = Number(prompt("첫번째 수 :"));
var op = prompt('연산자: ');
var num2 = Number(prompt("두번째 수: "));
switch (op) {
case '+':
	result=num1+num2;
	break;
case '-':
	result=num1-num2;
case '*':
	result=num1*sum2;
	break;
case '/':
	if(num2==0)
		result=num1;
	else
		result=num1/num2; //num2가 0이면 mum1만 값 출력
	break;
default:
	alert('지원하지 않는 연산자 임');
	break;
}
alert(num1+op+num2+'='+result);
