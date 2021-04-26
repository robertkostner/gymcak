console.log("Ahoj Gymčak.");

const isNotOdd = require('is-not-odd');
 
console.log(isNotOdd('0')); //=> true
console.log(isNotOdd('2')); //=> true
 
console.log(isNotOdd(1)); //=> false
console.log(isNotOdd(3)); //=> false