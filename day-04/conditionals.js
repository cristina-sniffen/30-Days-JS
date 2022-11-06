let isRaining = true
if (isRaining) {
  console.log('Remember to take your rain coat.')
}

let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
    console.log(`${num} is a negative number`)
  }

let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}

/*
    Switch is an alternative for if else if else else. 
    The switch statement starts with a switch keyword followed by a parenthesis and code block.
    Inside the code block we will have different cases. 
    Case block runs if the value in the switch statement parenthesis matches with the case value. 
    The break statement is to terminate execution so the code execution does not go down after 
    the condition is satisfied. The default block runs if all the cases don't satisfy the condition.
*/
let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}

