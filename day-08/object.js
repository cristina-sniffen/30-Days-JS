// empty object
const person1 = {}

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    isMarried: true
  }
console.log(person)
// We can access values of object using two methods:
//      using . followed by key name if the key-name is a one word
//      using square bracket and a quote

// accessing values using .
console.log(person.firstName)
console.log(person.age)
console.log(person.location) // undefined

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['age'])
console.log(person['location']) // undefined

// for instance to access the phone number we only use the square bracket method because it is two words
console.log(person['phone number'])

// The getFullName is function inside the person object and we call it an object method. 
// The this key word refers to the object itself.
const person2 = {
    firstName: 'Cristina',
    lastName: 'Sniffen',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
}
console.log(person2.getFullName()) //Cristina Sniffen

// An object is a mutable data structure and we can modify the content of an object after it gets created.
person2.title = 'teacher'
person2.skills.push('Meteor')

// adding a function to an object
person2.getSkills = function() {
    let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  return skills
}
console.log(person2)
console.log(person2.getSkills())

// Object.assign: To copy an object without modifying the original object
const copyPerson = Object.assign({}, person2)
console.log(copyPerson)

// Object.keys: To get the keys or properties of an object as an array
const keys = Object.keys(copyPerson)
console.log(keys) // ['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']

// Object.values: To get values of an object as an array
const values = Object.values(copyPerson)
console.log(values)

// Object.entries: To get the keys and values in an array
const entries = Object.entries(copyPerson)
console.log(entries)

// hasOwnProperty: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('skills'))