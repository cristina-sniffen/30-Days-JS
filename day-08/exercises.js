const dog = {
    name: "Dibble",
    legs: 4,
    age: 9,
    bark: function (){
        return "woof woof"
    }
}
dog.temper = "happy"
console.log(dog.name, dog.legs, dog.age, dog.temper, dog.bark())

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}
console.log(users.John.age)
users.Cristina  = {
    email: 'cristina@cristina.com',
    skills: ['Java', 'Python', 'JavaScript'],
    age: 19,
    isLoggedIn: false,
    points: 40
  }
console.log(users.Cristina)

let count = 0
for (const property in users) {
    if (users[property].points >= 50) {
        count++
    }
}
console.log(count)

let logged = 0
for (const property in users) {
    if (users[property].isLoggedIn == true) {
        logged++
    }
}
console.log(logged)

let arr = []
const mern = ["MongoDB", "Express", "React", "Node"]
for (const property in users) {
    let skills = users[property].skills
    if (skills.includes("MongoDB") && skills.includes("Express") && skills.includes("React") && skills.includes("Node")) {
        arr.push(property)
    }
}
console.log(arr)

let country = {
    name: "Nigeria",
    capital: "?",
    population: "7 billion",
    languages: ["hausa", "igbo", "yoruba"]
}
console.log(`${country.name}\n${country.capital}\n${country.population}\n${country.languages}`)

let personAccount = {
    firstName: "Cristina",
    lastName: "Sniffen",
    income: 10,
    totalIncome: function() {
        return this.income * 52
    }
}
console.log(personAccount.totalIncome())

let testUsers = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

const signUp = (username, email, password) => {
    testUsers.forEach(user => {
        if (user.username === username && user.password === password) {
            console.log("you already have an account")
        } else {
            let date = new Date()
            let chars = "abcdefghiklmnopqrstuvwxyz";
            let id = [];
            for (let i = 0; i < 6; i++) {
                id.push(chars[Math.floor(Math.random() * chars.length)])
            }
            id = id.join("");
            testUsers.push({
                _id: id,
                username: username,
                email: email,
                password: password,
                createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
                isLoggedIn: "false"
            })
        }
    })
    return testUsers[testUsers.length - 1]
}
console.log(signUp("Sloan", "cristina@cristina.com", 222222))
console.log(testUsers)

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


