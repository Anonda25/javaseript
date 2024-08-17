// fill arry responsive
const arr2 = Array(10);
arr2.fill(false);
console.log(arr2); 

// const names array

const names = ['Tonmoy', 'Anonda', ' magnath', 'boyoddia' ];
 names[0] = 'Tonmoy Biswas';
 names[1] = 'Anonda Biswas';
 names[2] = 'Magnath Biswas';
 names[3] = 'Boiddiya Biswas';

 console.log(names);

//  fill array and updeat
const response = Array(9);
response.fill(false);
for(let i = 0; i < response.length ; i++){
const rand = Math.floor(Math.random() * 10 + 1 );
response[i] = rand > 5 ? 'X' : 'Y';
}

console.log(response);

// array is mutable
function updeat(arr){
    for(let i = 0;  i < arr.length; i++){
        arr[i] =`${i + 1}. ${arr[i]}`; //ai ligne ta ami buje nai ki jonno kaj korca

    }
     return arr;
}
 

const updeatedNames = updeat(names);
console.log(names);

console.log(updeatedNames);

console.log( updeatedNames === names);




