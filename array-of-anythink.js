// array of function
const arr = [10, 'ten', true, {ten: 10}, [10, 10]];



const sum = (a , b) =>  a + b;
const sub = ( a , b) => a - b;
const times = ( a , b) => a * b;
const div = ( a , b ) => a / b;
const mod = ( a , b) => a % b;


const funcs = [ sum , sub , times, div , mod];

const a = 20, b = 40;
for(let i = 0; i < funcs.length; i++){
    const result = funcs[i](a, b)
    console.log(`[&{funcs[i].name}] Result = &{result}`);
}
