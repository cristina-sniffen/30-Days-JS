let quote =  'There is no exercise better for the heart than reaching down and lifting people up.' 
console.log(`The quote "${quote}" by John Holmes teaches us to help one another.`)
console.log(typeof Number('10') == typeof 10)
console.log(Math.ceil(parseFloat('9.8')))
let s = "I hope this course is not full of jargon"
console.log(s.includes("jargon"))
console.log(Math.floor(Math.random () * 101))
console.log(Math.floor(Math.random () * 51) + 50) // Math.floor(Math.random() * (max - min + 1)) + min
console.log(Math.floor(Math.random () * 256))
console.log("JavaScript"[Math.floor(Math.random () * "JavaScript".length)])
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")
let pays = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let paysMatch = pays.match(/\d+/g)
console.log((Number(paysMatch[0]) + Number(paysMatch[2])) * 12 + Number(paysMatch[1]))
