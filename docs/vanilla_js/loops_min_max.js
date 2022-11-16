//백준 10818
const fs = require("fs");

const filepath =
    process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");
// fs.readFileSync(filepath) 자바의 스캐너와 같은 역할

let count = inputs[0];
let numbers = inputs[1].split(" ").map(Number);

let Min_Max = { min: numbers[0], max: numbers[0] }

// for (let i=0; i<count; i++){
//     if(Min_Max['max']<numbers[i]){
//         Min_Max['max'] = numbers[i];
//     }
//     if(Min_Max['min']>numbers[i]){
//         Min_Max['min'] = numbers[i];
//     }
// }

for (let numbers of max) {
    if (Min_Max['max'] < numbers) {
        Min_Max['max'] = numbers
    } else if (Min_Max['min'] > numbers){
    Min_Max['min'] = numbers}}



console.log(Min_Max['min']);
console.log(Min_Max['max']);