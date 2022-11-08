function fullName(first, second) {
    let name = first + " " + second
    return name
}
console.log(fullName("Cristina", "Sniffen"))

function addTwo(first, second) {
    let sum = first + second
    return sum
}
console.log(addTwo(4, 8))

function areaOfRectangle(length, width) {
    let area = length * width
    return area
}
console.log(areaOfRectangle(3, 4))

function weight(mass, gravity = 9.8) {
    let weight = mass * gravity
    return weight
}
console.log(weight(2))

function bmi(weight, height) {
    let bmi = weight / Math.pow(height, 2)
    if (bmi <= 18.5) {
        console.log("Underweight")
    }
    else if (bmi <= 24.9) {
        console.log("Normal weight")
    }
    else if (bmi <= 29.9) {
        console.log("Overweight")
    }
    else {
        console.log("Obese")
    }
}
console.log(bmi(150, 2.5))

function findMax() {
    let max = -999999
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
    return max
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))

function solveQuadEquation(a = 0, b = 0, c = 0) {
    if (a == 0 && b == 0 && c == 0) {
        return 0
    }
    let d = (b**2) - (4*a*c)
    let sol1 = (-b - Math.sqrt(d))/(2*a)
    let sol2 = (-b + Math.sqrt(d))/(2*a)
    const mySet1 = new Set([sol1, sol2])
    return mySet1
}
console.log(solveQuadEquation(1, 7, 12))

function printArr() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}
console.log(printArr(["hi", 5]))

function swap(x, y) {
    let temp = x
    x = y
    y = temp
    return [x, y]
}
console.log(swap(3, 4))