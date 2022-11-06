let age = prompt("Enter your age: ")
if (age >= 18) {
  console.log(`You are old enough to drive`)
} else {
    console.log(`You are not old enough to drive`)
}

let myAge = prompt("Enter my age:")
let yourAge = prompt("Enter your age:")
if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you`)
} else if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me`)
} else {
    console.log("We are the same age")
}

let a = 4
let b = 3
a > b  
    ? console.log(`${a} is greater than ${b}`)
    : console.log(`${b} is greater than ${a}`)

if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${b} is greater than ${a}`)
}
let isEven = Number(prompt("Enter a number:"))
isEven % 2 == 0
    ? console.log(`${isEven} is an even number`)
    : console.log(`${isEven} is an odd number`)