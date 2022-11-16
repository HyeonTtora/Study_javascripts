// 백준	2562
const fs = require("fs");

const filepath =
    process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n").map(Number);
// fs.readFileSync(filepath) 자바의 스캐너와 같은 역할

let numbers = inputs;

let max = { max: numbers[0] }
let count = 1;
for (let i = 0; i < numbers.length; i++) {
    if (max['max'] < numbers[i]) {
        max['max'] = numbers[i];
        count = i+1;
    } 
}
console.log(max['max']);
console.log(count);

