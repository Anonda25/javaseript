// treaves array mopve
// const arr = [  1 , 2, 3, 4, 5];

// const n =arr[3];
// const m = arr[2];
// const x = 1; y =0;

// console.log(m, n, arr[x], arr[y], arr[x] + arr[y], arr[x + y + 3]);

const arr =[ 10, 30, 34, 56, 65, 66, 99, 98, ];

const a = arr[2];
const b = arr[4];
const c = arr[7];
const d = arr[8];
const x = 3; y =5; z=0;

// console.log(c, b, a, d, arr[x], arr[y], arr[z], arr[x] + arr[y],  arr[y] + arr[z], arr[x + y + z ]);



// simple traverse
for(let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
}
// array sum & avg
let sum = 0;
 for (let i =0; i< arr.length; i++){
    sum += arr[i];
}
console.log(sum);
console.log(sum / arr.length);

// find large Number

let largeNumber = arr[0];
for(let i = 1; i < arr.length; i++){
    if( arr[i] > largeNumber){
        largeNumber = arr[i];
    }
}
console.log( largeNumber);
// smallNumber find out

// let smallNumber = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] < smallNumber){
//         smallNumber = arr[i];
//     }
// }
// console.log(smallNumber);

let secendLargeNumber = arr[0];
for(let i = 1; i < arr.length; i++){
    if(arr[i] < secendLargeNumber){
      secendLargeNumber = arr[i];
    }
}
console.log(secendLargeNumber);