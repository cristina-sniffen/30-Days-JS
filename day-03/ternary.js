let isRaining = true
isRaining
  ? console.log('You need a rain coat.') // will output
  : console.log('No need for a rain coat.')

isRaining = false
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.') // will output

let number = 5
number > 0
  ? console.log(`${number} is a positive number`) // will output
  : console.log(`${number} is a negative number`)

number = -5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`) // will output