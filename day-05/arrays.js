// It is very common to use const instead of let to declare an array variable. 
// If you ar using const it means you do not use that variable name again.
const arr = Array()
const arr1 = [] // recommended
// OR let arr = new Array()

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
console.log('Numbers:', numbers) // Numbers: [0, 3.14, 9.81, 37, 98.6, 100]
console.log('Number of numbers:', numbers.length) // Number of numbers: 6

const arr2 = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr2)

// split function
let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

// indexing arrays
const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // we are accessing the first item using its index
let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]
console.log(lastFruit)  // lemon

// modifying array
// An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.
const modify = [1, 2, 3, 4, 5]
modify[0] = 10      // changing 1 at index 0 to 10
modify[1] = 20      // changing  2 at index 1 to 20
console.log(modify) // [10, 20, 3, 4, 5]

const eightEmptyValues = Array(8) // it creates eight empty values
const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'

// concat arrays
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList) // [1, 2, 3, 4, 5, 6]

// accessing value by index
const check = [1, 2, 3, 4, 5]
console.log(check.indexOf(5)) // -> 4
console.log(check.indexOf(0)) // -> -1

// check if element appears in an array
const fruits1 = ['banana', 'orange', 'mango', 'lemon']
let index = fruits1.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
    // This fruit does exist in the array
}

// lastIndexOf: It gives the position of the last item in the array. 
// If it exist, it returns the index else it returns -1.
const arrayNums = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(arrayNums.lastIndexOf(2)) // 7
console.log(arrayNums.lastIndexOf(0)) // -1

// includes(): To check if an item exist in an array. If it exist it returns the true else it returns false.
console.log(arrayNums.includes(5)) // true

// isArray(): checks whether a variable is an array
const number = 100
console.log(Array.isArray(number)) // false

// toString(): converts array to string, default is to separate by comma
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook
// join, default is comma join
console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook

// Splice: Takes three params
// Starting position, number of times to be removed, and number of items to be added.
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] 
// it removes three item and replace three items

// Push: adding item in the end. To add item to the end of an existing array we use the push method.
const arrPush  = ['item1', 'item2','item3']
arrPush.push('new item')
console.log(arrPush) // ['item1', 'item2','item3','new item']

// pop() remove one item from the end
nums.pop()
console.log(nums) // -> [1,2,3,4,5]

// shift() removes one item from the beginning
const nums1 = [1, 2, 3, 4, 5]
nums1.shift() // -> remove one item from the beginning
console.log(nums1) // -> [2,3,4,5]

// unshift(): adds one element to the beginning
const nums2 = [1, 2, 3, 4, 5]
nums2.unshift(0) // -> add one item from the beginning
console.log(nums2) // -> [0,1,2,3,4,5]
// reverse() : reverses order of elements
console.log(nums2.reverse) // [5,4,3,2,1,0] 

// Sort(): arrange array elements in ascending order.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
    ]
webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

// Array of arrays
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)  // 2
console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]