// let arr = [];
// for (i = 0; i <= 5; i++){
//     arr[i] = '';
//     for (j = 0; j <= i; j++){
//         arr[i]+='x'          
//     }
// }
// console.log(arr)


// let arr = [];
// for (i = 0; i <= 4; i++){
//     arr[i] += 1;
//     for (j = 0; j <= i; j++){
//         arr[i]=j;
//     }
// }
// console.log(arr)


// let arr = [];
// let str = '1';
// for (let i = 0; i < 10; i++) {
// arr.push(str[i]);
// str += '1';
// }
// console.log(arr)

// let arr = [];
// for (i = 0; i <= 4; i++){
//     arr[i] += 1;
//     for (j = 0; j <= i; j++){
//         arr[i]=j;
//     }
// }
// console.log(arr)

// let str = '';
// for (i = 0; i <= 5; i++){
//     for (j = 0; j<=i; j++){
//         document.write(str = i)
//     }
//     document.write('<br>')
// }

// let arr = [];
// for (i = 1; i <= 5; i++){
//     arr[i] = ''
//     for(j = 1; j<=i; j++){
//         arr[i]+=i
//     }
// }
// console.log(arr)
// let arr = [];
// let arrEl = 5;

// function arrFill (arr, arrEl) {
//     for (i = 0; i < arrEl; i++){
//         arr[i] = 'x'
        
//     }
//     console.log(arr)
// }

// console.log(arrFill(arr, arrEl));

// let arr = []
// for (i = 0; i <= 5; i++){
//     arr[i] = 'x'
// }
// console.log(arr)


// let arr = [];
// for (i = 0; i <= 5; i++){
//     arr[i] = ''
//     for(j = 0; j <= i; j++){
//         arr[i] += 'x'
//     }
// }
// console.log(arr)

// let arr = [];
// let str = 'x'
// for (i = 0; i < 5; i++){
//     arr.push(str)
//     str+='x'
// }
// console.log(arr)

// let key = 'x'
// let val = 5;

// function arrayFill (key, val){
//     let arr = [];
//     for (i = 0; i < val; i++){
//         arr[i] = key;
//     }
//     return arr;
// }

// console.log(arrayFill('x', 5));

//4==
// let arr = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// let curr = 0;
// for (i = 0; i < arr.length; i++){
//     sum+=arr[i];
//     if (sum <= 10){
//         curr++
//     }    
// }
// console.log(curr);


// let arr = [1, 2, 3, 4, 5, 6];
// let arr1 = [];
// for (i = arr.length - 1; i >= 0; i--){
//     arr1.push(arr[i])
// }
// console.log(arr1)

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum1 = 0;
// for (i = 0; i < arr.length; i++){
//     for (j = 0; j < arr[i].length; j++){
//         sum1 += arr[i][j]
//         //console.log(sum1)
//     }
// }
// console.log(sum1);

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum1 = 0;
// for (i = 0; i < arr.length; i++){
//     for (j = 0; j < arr[i].length; j++){
//         for (k = 0; k < arr[i][j].length; k++){
//             sum1 += arr[i][j][k];
//             console.log(sum1)
//         }
//     }
// }

function calculate(array) {
    let a = 0;
    for (let i = 0; i < array.length; i++) {
        a += array[i];
        if (a >= 10) {
            return i + 1;
        }
    }
}

let array = [1, 4, 3, 2, 8, 10, 89];
console.log(calculate(array));