for (let i = 0; i <= 10; i++) {
    console.log(i)
}

i = 0
while (i <= 10) {
    console.log(i)
    i++
}
i = 1;
let add = "#"
while (i <= 7) {
    console.log(add.repeat(i))
    i++
}
for (let i = 0; i <= 10; i++) {
    console.log(`${i} X ${i} = ${i * i}`)
}
for (let i = 0; i <= 100; i+=2) {
    console.log(i)
}
let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
}
console.log(sum)

let characters = "abcdefghijklmnopqrstuvwxyz123456789"
let string = ""
for (let i = 0; i < 6; i++) {
    string += characters.charAt(Math.floor(Math.random() * (characters.length+1)))
}
console.log(string)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
let newCountries = []
for (let i = 0; i < countries.length; i++) {
    newCountries.push(countries[i].toUpperCase())
}
console.log(newCountries)

let longest = ""
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > longest.length) {
        longest = countries[i]
    }
}
console.log(longest)
const tech = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let i = 0; i < tech.length; i++) {
    console.log(tech[i])
}
const land = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("land")) {
        land.push(countries[i])
    }
}
console.log(land)
