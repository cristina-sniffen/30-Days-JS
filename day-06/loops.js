// for(initialization, condition, increment/decrement){
    // code goes here }

for(let i = 5; i >= 0; i--){
    console.log(i)
} // 5 4 3 2 1 0

for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}
// 0 * 0 = 0
// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase()) } // ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

// while loop
let i = 0
while (i <= 5) {
    console.log(i)
    i++
} // 0 1 2 3 4 5

// do while loop
i = 0
do {
  console.log(j)
  i++
} while (i <= 5) // 0 1 2 3 4 5

// for of arrays
const numbers = [1, 2, 3, 4, 5]
for (const num of numbers) {
  console.log(num)
} // 1 2 3 4 5
for (const num of numbers) {
  console.log(num * num)
} // 1 4 9 16 25
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
for (const tech of webTechs) {
    console.log(tech.toUpperCase())
} // HTML CSS JAVASCRIPT REACT NODE MONGODB

// break exits/interrupts a loop
for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
} // 0 1 2

// skips a certain iteration
for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue // skips iteration where i == 3
    }
    console.log(i)
  } // 0 1 2 4 5