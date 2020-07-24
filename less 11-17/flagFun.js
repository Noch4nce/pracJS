// let arr = [1, 2, 3, 4, 5, 6, 5];
// let flag = false;
// for (i = 0; i < arr.length; i++){
//     if (arr[i] == 5){
//         flag = true;
//         break;
//     }
// }
// if (flag == true){
//     console.log('ye');
// } else {
//     console.log('no');
// }

// let arr = [1, 2, 3, 4, 5, 6];

// console.log(getEl(arr));

// function getEl (arr){
//     for (i = 0; i < arr.length; i++){
//         if (arr[i] == 5){
//             return 'ye';
//         } 
//     }
//     return 'no'    
// }

// let num = 31;
// let flag = false;

// for (i = 2; i < num; i++){
//     if (num % i == 0){
//         flag = true;
//     }
// }
// if (flag == true){
//     console.log(true);
// } else {
//     console.log(false);
// }

// let num = 30;

// function getEl (num) {
//     for (i = 2; i < num; i++){
//         if (num % i == 0){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(getEl(num));

// let nums = [12, 3, 5, 6, 44, 3];
// let flag = false;

// for (i = 0; i < nums.length; i++){
//     if (nums[i] == 3){
//         flag = true;
//         console.log('ye')
//     }
// }
// if (flag == true){
//     console.log('ye');
// } else {
//     console.log('no');
// }

let arr = [1,2,3,4,5,6];
let flag = false;
for(i = 0; i < arr.length; i ++){
if(arr[i] == arr[i + 1]){
flag = true;
break;
}
}
if(flag == true){
console.log('Да');
}else {
console.log('Нет');
}

// let arr = [3, 1, 1, 12];
//let flag = false;
// for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++){
//         if (arr[i] == arr[j]){
//             console.log('ye')
//         } else {
//             console.log('no')
//         }
//     }
// }
// if (flag == true) {
//     console.log('ye');
// } else {
//     console.log('no')
// }
