function changeText(){
    let queryChangeText = document.querySelector("#changetext");
        queryChangeText.innerHTML = "Change on Me!";
}

let queryClickalert = document.querySelector('#clickalert');
// element.addEventListener(event, function, useCapture);
queryClickalert.addEventListener("click", clickAlert);
function clickAlert(){
    alert("click on Me!");
}

let queryButton = document.querySelector("#buttonChangeText");
queryButton.addEventListener("click",targetText );
function targetText(event){
    let quertyTargetText = document.querySelector("#targetText");
    quertyTargetText.innerHTML = "Target Text!"
}



var problem = 1; 
var answerbt = 1;// 몇 번 문제인지를 설정하는 인덱스 변수
// var total = 0; // 점수를 저장하는 변수

var test_check = null; // 문제가 모두 체크되었는지 확인하는 변수 (문제의 개수만큼 배열로 동적할당됨)
var num_of_test = 5; // 문제의 총 개수를 저장하는 변수

var all_problem_created = false; // 문제가 모두 만들어졌는지 여부를 확인하는 boolean 변수

// 문자열 배열을 선언하여 각 문항들을 저장함
// 첫 번째 데이터가 공백인 이유는 배열 인덱스 관리를 직관적으로 하기 위함


var test_text = [
    [" "],
    ["1.해당 매장을 방문시 매장은 청결 하였습니까?"],
    ["2.주문시 직원은 고객님께 친절 하였습니까?"],
    ["3.주문하신 음료가 나오기까지 시간이 적당하였습니까?"],
    ["4.해당 매장을 다음에도 재방문 하실 의향이 있으십니까?"],
    ["5.직원이 제조한 음료에 대해 맛은 좋았습니까?"]
];

var test_answer = [
    [" "],
    ["전혀 아니다"],
    ["아니다"],
    ["보통이다"],
    ["그렇다"],
    ["매우 그렇다"]
];

// 문제의 개수만큼 배열을 동적할당
// 이 배열은 각 문제가 체크되었는지를 확인하는 용도

function create_check_array() {
    test_check = new Array();

    for (var i = 1; i <= num_of_test + 1; i++) {
        test_check.push(false);
    }
}
// let inner = document.querySelector("#inner")
// inner.appendChild(newText)


function create_radio_button() {
    if (all_problem_created == false) { // 문제가 만들어져있지 않다면 -> 문제 생성
        create_check_array();
        all_problem_created = true;

        for (var i = 0; i < num_of_test; i++) { // 문제의 개수만큼 반복
            var newText = document.createTextNode(test_text[problem]); // 질문 텍스트를 가져와서 저장함
            document.getElementById("#nextbutton").appendChild(newText); // 질문을 출력
            var newAnswer = document.createTextNode(test_answer[answerbt]);
            document.getElementById("#nextbutton").appendChild(newAnswer);

            for (var j = 0; j <= 4; j++) {
                var radioInput = document.createElement("input"); // <input>을 만들고 변수에 지정함

                // 각 속성들을 지정함
                radioInput.setAttribute("type", "radio"); // = radioInput.type = "radio";
                radioInput.setAttribute("name", "problem" + problem);
                radioInput.setAttribute("value", "answer" + j);

                document.getElementById("#btn_area").appendChild(radioInput); // 속성을 지정한 <input>을 출력 (라디오 버튼 출력)
            }
            problem++; // 각 문제의 출력이 끝나면 다음 문제로 넘어감


        }
    }
    else { // 문제가 만들어져 있다면 -> 생성하지 않음
        alert("진행 중인 진단이 있습니다.");
    }
}



    function all_problem_check() {
        for (var i = 1; i < num_of_test + 1; i++) {
            if (test_check[i] == false) {
                return false;
            }
        }
        return true;
    }
