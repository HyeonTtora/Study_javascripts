let fs = require('fs');

// let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ")
// 위코드를 풀어쓰면 아래 
let readFileSync = fs.readFileSync("/dev/stdin"); //스캐너역할
let toString = readFileSync.toString();
let trim = toString.trim();
let splite = trim.split(" ");

//

const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);
// fs.readFileSync(filepath) 자바의 스캐너와 같은 역할


console.log(inputs[0]+inputs[1]);

