
const fs = require("fs");

let inputs = fs.readFileSync("docs/vanilla_js/input.txt").toString().trim().split(" ").map(Number);

let questionus = [
  {
    questionusNum: "1",
    question: "교수는 수업 전 강의 목표를 명확히 제시하였습니까?",
    answerNum: "E1 E2 E3",
  },
  {
    questionusNum: "2",
    questionuestion: "강의의 내용은 체계적이고 성의있게 구성되었는가?",
    answerNum: "E1 E2",
  },
  {
    questionusNum: "3",
    question: "교수는 강의 내용에 대해 전문적 지식이 있었는가?",
    answerNum: "E1 E2 E3 E4 E5",
  },
  {
    questionusNum: "4",
    question: "강의 진행 속도는 적절하였는가?",
    answerNum: "E1 E2 E3",
  },
];


function answers(answerNum) {
  if (answerNum == "E1 E2") {
    console.log("(1)전혀 아니다.  (2)아니다.");
  } else if (answerNum == "E1 E2 E3") {
    console.log("(1)전혀 아니다.  (2)아니다.  (3) 보통이다.");
  } else if (answerNum == "E1 E2 E3 E4") {
    console.log("(1)전혀 아니다.  (2)아니다.  (3) 보통이다.  (4)그렇다.");
  } else if (answerNum == "E1 E2 E3 E4 E5") {
    console.log(
        "(1)전혀 아니다.  (2)아니다.  (3) 보통이다.  (4)그렇다.  (5)매우 그렇다."
        );
    }
}

function answer(i) {
  i++;
  if (i == 1) {
    console.log(`(${i}) 전혀 아니다.`);
  }
  if (i == 2) {
    console.log(`(${i}) 아니다.`);
  }
  if (i == 3) {
    console.log(`(${i}) 그렇다.`);
  }
  if (i == 4) {
    console.log(`(${i}) 매우 그렇다.`);
  }
}


function questionusPrint(i) {
  console.log(`${questionus[i].questionusNum}. ${questionus[i].question}`);
}



for (let i = 0; i < questionus.length; i++) {
    questionusPrint(i);
    answers(questionus[i].answerNum);
    console.log(`답)  (${inputs[i]})`);
  }
  
  console.log("이용해주셔서 감사합니다!");