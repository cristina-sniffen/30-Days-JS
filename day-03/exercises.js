/*
let base = prompt('Enter Base:')
let height = prompt('Enter Height:')
console.log(`The area of the triangle is ${base * height * .5}`)

let per1 = prompt('Enter side A:')
let per2 = prompt('Enter side B:')
let per3 = prompt('Enter side C:')
console.log(`The perimeter of the triangle is ${Number(per1) + Number(per2) + Number(per3)}`)

let radius = prompt('Enter Radius:')
console.log(`The area of the circle is ${radius * 3.14 * 2}`)
*/
let x = 0;
let eq = 2 * x - 2
let x1y1 = [0, -2]
let x2y2 = [1, 0]
let slope = (x2y2[1] - x1y1[1])/(x2y2[0] - x1y1[0])
console.log(`Slope is: ${slope}`)
console.log(`Y-Intercept is: ${eq}`)

let point1 = [2, 2]
let point2 = [6, 10]
let slope1 = (point2[1] - point1[1])/(point2[0] - point1[0])
console.log(slope1)
console.log(slope == slope1)

x = -3
let poly = Math.pow(x,2) + (6*x) + 9
console.log(poly)

/*
let hours = prompt("Enter Hours")
let rate = prompt("Enter Rate per Hour")
console.log(hours * rate)
*/

let firstName = 'Cristina'
let lastName = 'Sniffen'
let length = firstName.length > 7

length
  ? console.log('Your name is long') // will output
  : console.log('Your name is short')

firstName.length > lastName.length
  ? console.log(`Your first name, ${firstName}, is longer than your last name ${lastName}`) // will output
  : console.log(`Your first name, ${firstName}, is shorter than your last name ${lastName}`)

let myAge = 250
let yourAge = 25
console.log(`I am ${myAge - yourAge} years older than you`)

const now = new Date()
const year = now.getFullYear()
let drive = Number(prompt("Enter birth year"))

year - drive >= 18
    ? console.log(`You are ${year - drive}. You are allowed to drive`)
    : console.log(`You are ${year - drive}. You will be allowed to drive in ${18 - (year - drive)} years`)

const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 6/11/2022 8:44
console.log(`${year}-${month}-${date} ${hours}:${minutes}`) // 2022-11-6 8:44

// prints hour as two digits
hours < 10
    ? console.log(`${year}-${month}-${date} 0${hours}:${minutes}`)
    : console.log(`${year}-${month}-${date} ${hours}:${minutes}`)