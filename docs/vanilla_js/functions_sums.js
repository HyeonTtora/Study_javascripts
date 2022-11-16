// 질문 : 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.
// 백준 : 15596
// 작성해야 하는 함수는 다음과 같다.
// a: 합을 구해야 하는 정수 n개가 저장되어 있는 배열 (0 ≤ a[i] ≤ 1,000,000, 1 ≤ n ≤ 3,000,000)
// 리턴값: a에 포함되어 있는 정수 n개의 합

function sum(numbers){
    let NumSum = 0;
    for(let num of numbers){
        NumSum += num;
    }
    return NumSum;
}

let numbers = [0,1,2,3,4,5,6,7,8];
let NumSum = sum(numbers);
console.log(NumSum);