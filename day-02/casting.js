console.log(typeof 'Asabeneh')  // string
console.log(typeof 10)          // number
console.log(typeof true)        // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

// String -> Int
let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10
let numInt1 = Number(num)
console.log(numInt1) // 10

// String -> Float
let toFloat = '9.81'
let float = parseFloat(toFloat)
console.log(float) // 9.81
let float2 = Number(toFloat)
console.log(float2) // 10