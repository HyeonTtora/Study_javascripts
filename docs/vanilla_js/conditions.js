let num = 5;
if (20 > 5 || 20 < 5) {
    console.log("print!");
}

if (20 < num) {
    console.log("print!");
} else if (20 > num) {
    console.log(`20 >&{num}`);
} else{
    console.log(`done`);
}

// Ternay operator 
let condition = 20 < num ? `20 < ${num}` : `done`;

console.log();

// docs/vanilla_js/conditions.js:3
// 20 >&{num}
// docs/vanilla_js/conditions.js:9
// 20 < num
// false
// 20 > num ? `20 < ${num}` : `done`
// '20 < 5'