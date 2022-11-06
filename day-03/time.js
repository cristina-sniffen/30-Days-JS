const now = new Date()
console.log(now) // current date
console.log(now.getFullYear()) // 2022
console.log(now.getMonth()) // 0, because the month is January, month(0-11)
console.log(now.getDate()) // 4, because the day of the month is 4th,  day(1-31)
console.log(now.getDay()) // 6, because the day is Saturday which is the 7th day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)
console.log(now.getHours()) // 20, 10pm in military time
console.log(now.getTime()) // returns number of seconds since January 1, 1970


const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56