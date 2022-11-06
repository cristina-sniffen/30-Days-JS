const array = Array();
const arrSeven = [1,2,3,4,5,6,7]
console.log(arrSeven.length)
console.log(arrSeven[0])
console.log(arrSeven[arrSeven.length / 2])
console.log(arrSeven[arrSeven.length - 1])
const mixedDataTypes = [
    'Cristina',
    4,
    true,
    3.2,
    ['Redux'],
    '18'
    ]
console.log(mixedDataTypes.length)
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies)
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length / 2])
console.log(itCompanies[itCompanies.length - 1])
console.log(itCompanies.toString())
console.log(itCompanies.join(" "))
console.log(itCompanies.includes("Google"))
itCompanies.sort()
console.log(itCompanies)
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(itCompanies.length - 3,itCompanies.length)) // last three elements

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const splitComma = text.split(",")
const joinComma = splitComma.join("")
const splitPeriod = joinComma.split(".")
const joinedSpace = splitPeriod.join("")
const words = joinedSpace.split(" ")
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
console.log(shoppingCart)
shoppingCart.push("Sugar")
console.log(shoppingCart)
let index = shoppingCart.indexOf("Honey")
console.log(index)
shoppingCart.splice(index, 1)
console.log(shoppingCart)
shoppingCart[3] = "Green Tea"
console.log(shoppingCart)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages[0])
console.log(ages[ages.length - 1])
const mid = Math.floor(ages.length / 2)
ages.length % 2 !== 0 
    ? console.log(ages[mid])
    : console.log((ages[mid - 1] + ages[mid]) / 2) // find median
    console.log(ages[ages.length - 1] - ages[0]) // find range

