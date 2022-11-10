
// A variable declared with var only scoped to function but variable declared with 
// let or const is block scope (function block, if block, loop block, etc). 
// Block in JavaScript is a code in between two curly brackets ({}).
function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined
if (true){
    var gravity = 9.81
    console.log(gravity) // 9.81
  }
console.log(gravity)  // 9.81

// When we use let our variable is block scoped and it will not infect other parts of our code.
if (true){
    const gravity = 9.81
    console.log(gravity) // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
for(let i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined

/* The scope let and const are the same. The difference is only reassigning. 
We can not change or reassign the value of the const variable. 
I would strongly suggest you to use let and const to write clean code and avoid hard to debug mistakes.
*/