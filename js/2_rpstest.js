var SCISSORS='가위';
var ROCK='바위';
var PAPER='보';
var userInput=prompt("가위, 바위, 보!");
if(userInput!==SCISSORS&&userInput!==ROCK&&userInput!==PAPER){
	alert('가위, 바위, 보 중 하나를 입력해야 합니다!');
}else{
	var comInput;
	var rnd=Math.random();
	if(rnd<0.33){
		comInput=SCISSORS;
	}else if(rnd<0.66){
		comInput=ROCK;
	}else{
		comInput=PAPER;
	}
	//사용자가 가위를낸 경우
	if(userInput===SCISSORS){ //사용자가 가위 컴퓨터가 가위
		if(comInput===SCISSORS){
			alert('컴퓨터: '+comInput+' - 컴퓨터와 비겼습니다.')
		}else if(comInput===ROCK){ //사용자가 가위 컴퓨터가 바위
			alert('컴퓨터: '+comInput+' - 컴퓨터가 이겼습니다.')
		}else{ //사용자가 가위 컴퓨터가 보
			alert('컴퓨터: '+comInput+' - 사용자가 이겼습니다.')
		}
	}
	//사용자가 바위를낸 경우
	else if(userInput===ROCK){ //사용자가 바위 컴퓨터가 가위
		if(comInput===SCISSORS){
			alert('컴퓨터: '+comInput+' - 사용자가 이겼습니다.')
		}else if(comInput===ROCK){ //사용자가 바위 컴퓨터가 바위
			alert('컴퓨터: '+comInput+' - 컴퓨터와 비겼습니다.')
		}else{ //사용자가 바위 컴퓨터가 보
			alert('컴퓨터: '+comInput+' - 컴퓨터가 이겼습니다.')
		}
	}
	//사용자가 보를낸 경우
	else{
		if(comInput===SCISSORS){ //사용자가 보 컴퓨터가 가위
			alert('컴퓨터: '+comInput+' - 컴퓨터가 이겼습니다.')
		}else if(comInput===ROCK){ //사용자가 보 컴퓨터가 바위
			alert('컴퓨터: '+comInput+' - 사용자가 이겼습니다.')
		}else{ //사용자가 보 컴퓨터가 보
			alert('컴퓨터: '+comInput+' - 컴퓨터와 비겼습니다.')
		}
	}
}

