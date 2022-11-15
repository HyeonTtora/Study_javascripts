// operate number type and string
let number_first = 3;
let string_second = "5";

console.log(number_first + string_second);
// recommand this way 
let concate_string = `${number_first}${string_second}`;

string_second = "A"
console.log(number_first + string_second);


// Strings
let animal = 'tiger';
console.log(`${animal}`);

let sentance = "  5 2 6  ";
let trims = sentance.trim(); // 공백 제거
let splits = trims.split(" "); // 공백으로 배열 만듬
let maps = splits.map(Number); // 각 배열을 String To Number
// split
console.log(maps[0] + maps[1] + maps[2]); // 덧함 

let inputs = sentance.trim().split(" ").map(Number) //체인 펀션
console.log(maps[0] + maps[1] + maps[2]); // 덧함 





// animal.substring(0, 3)
// 'tig'
// animal.charAt
// ƒ charAt()
// animal.charAt(0)
// 't'
// animal.replace('ti','TI')
// 'TIger'
// animal.toUpperCase()
// 'TIGER'
// animal.split('g')
// (2) ['ti', 'er']