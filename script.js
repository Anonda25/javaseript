let n = 10, l = 100;

let operation = (n < 40) && (l < 150);
// ture && ture
console.log("(" + n + " < 40) && (" + l +  "  > 150 ) == " + operation);

operation = ( n > 20 ) || ( l < 150);
console.log( " ( ' + n +' >  100) || ( ' + l + ' < 150) == " + operation);

console.log( ' operation = ' + operation  + ' and Not operation = ' + !operation);









/**
 * OR operation
 * A B R
 * T T T
 * T F F 
 * F T F
 * F F F
 * 
 * 
 * AND OPREATION
 * A  B   R 
 * T  T   T 
 * T  F   T
 * F  T   T 
 * F  F   F
 */