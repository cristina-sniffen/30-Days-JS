// use backslash(\) to indicate that the string will continue on the next line
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph)

/*
    In JavaScript and other programming languages \ followed by some characters is an escape sequence. 
    \n: new line
    \t: Tab, means 8 spaces
    \\: Back slash
    \': Single quote (')
    \": Double quote (")
*/
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

// enclose the expression with a curly bracket({}) preceded by a $ sign to insert variables
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let language = 'JavaScript'
let job = 'teacher'
let fullName = firstName + ' ' + lastName

let personInfoThree = `I am ${fullName}. I live in ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoThree)

// index into strings
let js = 'JavaScript'
console.log(js.length)  // 10
let firstLetter = js[0]
console.log(firstLetter)  // J
let lastIndex = js.length - 1
console.log(js[lastIndex])   // t

// toUpperCase(): this method changes the string to uppercase letters.
console.log(js.toUpperCase())  // JAVASCRIPT

// toLowerCase(): this method changes the string to lowercase letters.
console.log(js.toLowerCase())  // javascript

// substring(): It takes two arguments, the starting index and the stopping index 
// but it doesn't include the character at the stopping index.
console.log(js.substring(0,4))     // Java
console.log(js.substring(4))       // Script

// split(): The split method splits a string at a specified place.
let days = '30 Days Of JavaScript'
console.log(days.split())     // Changes to an array -> ["30 Days Of JavaScript"]

// trim(): Removes trailing space in the beginning or the end of a string.
let daysTrim = '   30 Days Of JavaScript   '
console.log(string.trim()) // 30 Days Of JavaScript

// includes(): It takes a substring argument and it checks if substring argument exists in the string. 
// If a substring exist in a string, it returns true, otherwise it returns false.
console.log(days.includes('Days'))     // true
console.log(days.includes('days'))     // false - it is case sensitive!

// replace(): takes as a parameter the old substring and a new substring.
console.log(days.replace('JavaScript', 'Python')) // 30 Days Of Python

// charAt(): Takes index and it returns the value at that index
console.log(days.charAt(4))  // a

// indexOf(): Takes a substring and if the substring exists in a string it returns the first 
// position of the substring if does not exist it returns -1
console.log(days.indexOf('Days'))       // 3
console.log(days.indexOf('days'))       // -1

// concat(): it takes many substrings and joins them.
let cat = '30'
console.log(cat.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

// startsWith/endsWith: it takes a substring as an argument and it checks if the 
// string starts/ends with that specified substring. It returns a boolean(true or false).
let includesLove = 'Love is the best to in this world'
console.log(includesLove.startsWith('Love'))   // true
console.log(includesLove.startsWith('love'))   // false
console.log(string.endsWith('world'))         // true

// search(): it takes a substring as an argument and it returns the index of the first match. 
// The search value can be a string or a regular expression pattern.
let s = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(s.search('love'))          // 2
console.log(s.search(/javascript/gi))  // 7; g means check globally, i means not case sensitive

/* 
    match: it takes a substring or regular expression pattern as an argument and it returns an array 
    if there is match if not it returns null. Let us see how a regular expression pattern looks like. 
    It starts with / sign and ends with / sign.
*/
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/
// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.
console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

// repeat(): it takes a number as argument and it returns the repeated version of the string.
console.log("hi ".repeat(3)) // hi hi hi
