//declaring a function without a parameter
function functionName() {
    // code goes here
  }
functionName() // calling function by its name and with parentheses

function printFullName(){
    let firstName = 'Cristina'
    let lastName = 'Sniffen'
    let fullName = firstName + " " + lastName
    return fullName
}
console.log(printFullName()) // a function has to be called by its name to be executed 

function areaOfCircle(r) { // function with parameter
    let area = Math.PI * r * r
    return area }
console.log(areaOfCircle(10)) // should be called with one argument

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum) }
sumTwoNumbers(10, 20) // calling functions
// If a function doesn't return it doesn't store data, so it should return

function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i]
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers)) //15

// function with unlimited params; use arguments object
function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i] }
    return sum }
console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

/*
    Arrow function does not have the function scoped arguments object. 
    To implement a function which takes unlimited number of arguments 
    in an arrow function we use spread operator followed by any parameter name. 
    Any thing we passed as argument in the function can be accessed as array in the arrow function. 
*/
const sumAllNums2 = (...args) => {
    let sum = 0
    for (const element of args) {
      sum += element }
    return sum }
console.log(sumAllNums2(1, 2, 3, 4)) // 10
console.log(sumAllNums2(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums2(15, 20, 30, 25, 10, 33, 40))  // 173

// Create a function without a name and we assign it to a variable. 
// To return a value from the function we should call the variable
const square = function(n) {
    return n * n
  }
console.log(square(2)) // -> 4

// Self invoking functions are anonymous functions which do not need to be called to return a value.
(function(n) {
  console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
let squaredNum = (function(n) {
  return n * n
})(10)
console.log(squaredNum)

// Arrow function uses arrow instead of the keyword function to declare a function.
const square = n => {
  return n * n
} 
const changeToUpperCase = arr => { // second example
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}
const printFullName = (firstName, lastName) => { // third example
  return `${firstName} ${lastName}`
}
// normal function declaration
function square(n) {
  return n * n
}

// Sometimes we pass default values to parameters, 
// when we invoke the function if we do not pass an argument the default value will be used.
function greetings(name = 'Peter') {
  let message = `${name}, welcome to JS`
  return message
}
const greetings = (name = 'Peter') => { // with arrow function
  let message = name + ', welcome to JS'
  return message
}
console.log(greetings()) // Peter, welcome to JS
console.log(greetings('Cristina')) // Cristina, welcome to JS

function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + ' N' // the value has to be changed to string first
  return weight
}
const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N' // with arrow function
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon


