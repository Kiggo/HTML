var water=Number(prompt(
		"---------Menu---------\r"+
		"1. 가정용(liter당 50원)\r"+
		"2. 상업용(liter당 45원)\r"+
		"3. 공업용(liter당 35원)\r"+
		"\r메뉴를 선택하세요=>"));		
var liter=Number(prompt("사용량을 입력하세요(liter)=>"));
switch(water){
	case 1:
		alert("사용자 코드: 1 \r" +
				"사용 요금: "+50*liter+" 원\r" +
				"총수도요금: "+((50*liter)+50*liter*0.05)+" 원");
	break;
	case 2:
		alert("사용자 코드: 2 \r" +
				"사용 요금: "+45*liter+" 원\r" +
				"총수도요금: "+((45*liter)+50*liter*0.05)+" 원");
		break;
	case 3:
		alert("사용자 코드: 3 \r" +
				"사용 요금: "+35*liter+" 원\r" +
				"총수도요금: "+((35*liter)+50*liter*0.05)+" 원");
		break;
	default :
		alert("지원하지 않는 선택입니다.")
}
