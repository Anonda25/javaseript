// constack pattan

const a1 = new Array(5);
console.log(a1, a1.length);
const a2 = new Array(5);
console.log(a2, a2.length);



// Factory pattan
const b2 = Array(5);
console.log(b2, b2.length);
const b1 = Array(1, 2 , 3 , 4 , 5);
console.log(b1, b1.length);

console.log(a1.__proto__.constructor);
console.log(b2.__proto__.constructor);