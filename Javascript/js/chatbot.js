var follow = 0;
var app = document.getElementById("chatbox");
var typewriter = new Typewriter(chatbox, {
    loop: false, delay: 50
});

typewriter.typeString("안녕??")
    .pauseFor(1300)
    .deleteAll()
    .typeString("난 짤랑이라고해")
    .start();

var json = [{
    "question": "",
    "answer": ""
}];

var question = "";
var answer = "";
var key = 0;

function onClick() {
    var value = document.getElementById('console').value;
    var container = document.getElementById('container');
    console.log(value);

    if (value == "안녕") {
        typewriter
            .deleteAll()
            .typeString("뭐하다 이제와??")
            .start();

    } else if (value == "불꺼줘") {
        container.style.backgroundColor = 'black';
        chatbox.style.color = 'white';
        typewriter
            .deleteAll()
            .typeString("어때 어두워??")
            .start();

    } else if (value == "불켜줘") {
        container.style.backgroundColor = 'white';
        chatbox.style.color = 'black';
        typewriter
            .deleteAll()
            .typeString("지금은 어때")
            .start();

    } else if (value == "따라해봐") {
        typewriter
            .deleteAll()
            .typeString("따라해볼게ㅎㅎ")
            .start();
            follow = 1;
        
    } else if (follow == 1) {
        if (value == "그만해") {
        typewriter
            .deleteAll()
            .typeString("알았어 그만할게")
            .start();
            follow = 0;
        } else{
            typewriter
            .deleteAll()
            .typeString(value + "ㅎㅎ")
            .start();
        }
    } else {

        if (key == 1) { // key 값이 1인경우 , 사용자의 선택 유도
            if (value == "네") {
                typewriter
                    .deleteAll()
                    .typeString("대답을 입력해주세요")
                    .start();
                key = 2; //key 값을 2로 만들어, 대답을 입력받는 조건으로 변경
            } else { //아니요
                typewriter
                    .deleteAll()
                    .typeString("냥~!")
                    .start();
                key = 0;
            }
            return;
        }

        if (key == 2) {
            answer = value; //전역변수 answer값에사용자의 입력을 저장
            push_json(); //json 데이터에 값을 추가하는 함수
            return;
        }

        for (let i = 0; i < json.length; i++) {

            if (value == json[i].question) {
                typewriter
                    .deleteAll()
                    .typeString(json[i].answer)
                    .start();
                return;
            }
        }
        typewriter
            .deleteAll()
            .typeString("뭐라고?? 다시 말해줘 <br> 말을 가르쳐 주실래요?<br>(네 or 아니요)")
            .start();
        question = value;
        key = 1;
    }
}

function push_json() {
    json.push({
        question: `${question}`,
        answer: `${answer}`
    });
    //json 이라는 데이터에 값을 추가하는 push 함수
    typewriter
        .deleteAll()
        .typeString("말을 배웠다 짤랑!")
        .start();
    key = 0;
}

document.getElementById('btn').addEventListener('click', onClick);