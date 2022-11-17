// function name(parameter1,parameter2,parameter3){
    // code to be executed
// }


{
    let sum_number = 1 + 3;
    let sum_functions = sum(1,2);
    console.log();
    //item_first = 1 , item_second =  2 
}
//nomal
// param :2(1,3), return 1(1+3)
function sum(item_first,item_second){
    return item_first+item_second;
    /** 더하기를 하는 함수 */
}
// anonymouse function
let calculateSum = function (item_first,item_second){
    return item_first+item_second;
    /** 더하기를 하는 함수 */
}

{
  console.log(`${calculateSum(1,2)}`)
}
//Arrow Function

let calculateSumSecond = (item_first,item_second) => {
    return item_first+item_second;
    /** 더하기를 하는 함수 */
}

{
    let result = calculateSumSecond(7,calculateSum);
    console.log(`${result}`);
    console.log(`${calculateSumSecond(7, 8 )}`);
}

//  rest parameters
function printRestParms(...args){
    let restParm = (arg) =>
    if(typeof arg == 'object'){
        
    }
    {console.log(`arg : ${args}`);}

    args.forEach(restParm);
}
{
    printRestParms(2,4,5);
    printRestParms(2,4,5,6,7);
}

