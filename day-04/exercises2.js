let grade = Math.floor(Math.random() * 101)
console.log(grade)

switch (true) {
  case grade >= 90:
    console.log('A')
    break
  case grade >= 80:
    console.log('B')
    break
  case grade >= 70:
    console.log('C')
    break
  case grade >= 60:
    console.log('D')
    break
  default:
    console.log('F')
}

let month = prompt("Enter current month")
month = month.toLowerCase()
switch (month) {
  case 'september':
  case 'october':
  case 'november':
    console.log('It is Autumn')
    break
  case 'december':
  case 'january':
  case 'february':
    console.log('It is Winter')
    break
  case 'march':
  case 'april':
  case 'may':
    console.log('It is Spring')
    break
  default:
    console.log('It is Summer')
}

let numDays = prompt("Enter current month")
let year = prompt("Is it a leap year?")
numDays = numDays.toLowerCase()
year = year.toLowerCase()
switch (true) {
  case (numDays === 'february' && year === 'yes'):
    console.log(`${numDays} has 29 days because it is a leap year`)
    break
  case numDays === 'february':
    console.log(`${numDays} has 28 days.`)
    break
  case numDays === 'june':
  case numDays === 'april':
  case numDays === 'september':
  case numDays === 'november':
    console.log(`${numDays} has 30 days.`)
    break
  default:
    console.log(`${numDays} has 31 days.`)
}
