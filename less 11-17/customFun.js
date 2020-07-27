// function isNmbInRange (num) {
//     if (num > 0 && num < 10){
//         return true;
//     } else {
//         return false;
//     }

// }
// console.log(isNmbInRange(9));

function isNmbInRange (num) {
    return num > 0 && num < 10;
}
console.log(isNmbInRange(12))

let arr = [1, 5, 13, 24, 9, -6];
let newArr = [];
for (i = 0; i < arr.length; i++){
    if (isNmbInRange(arr[i])){
        newArr.push(arr[i]);
    }
}
console.log(newArr);

function getDigSum (num) {
    let sum = 0;
    let str = String(num).split('');
    for (i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum;
}
console.log(getDigSum(123));


//4
// let res = 0;
// let ye = 160;
// for (j = 1; j < ye; j++){ 
//    if (getDigSum(j) == 13){
//         res = '' + j;
//        //console.log(res)
//    } 
// }
// console.log(res)

let res = [];
function getYearsSum (num) {
    for (j = 1; j <= num; j++){
        if (getDigSum(j) == 13){
            res.push(j);
        }
    }
    return res;
}
console.log(getYearsSum (70))

function isEven(num) {
    if(num > 0 && num % 2 == 0) {
        return true;
    } else {
        return false;
    } 
}
console.log(isEven(2));


let arr1 = [4, 13, 22, 5, 32];
let newArr1 = [];
for (i = 0; i < arr1.length; i++){
    if (isEven(arr1[i]) == true){
        newArr1.push(arr1[i])
    }
}
console.log(newArr1)

function getDivisors (num) {
    let arr2 = [];
    for (i = 1; i <= num; i++){
        if(num % i == 0){
            arr2.push(i);
        }
    }
    return arr2;
}
console.log(getDivisors(12)); 


function getDigitsSum(num) {
    let sum = 0;
    let str = String(num);
    for (i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    } 
    return sum;
}

for (j = 0; j <= 117; j++) {
    if (getDigitsSum(j) == 13) {
        console.log(`${j}`);
    }
}    
