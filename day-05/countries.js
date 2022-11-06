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

let index = countries.indexOf("Ethiopia")

if (index == -1) {
    countries.push("Ethiopia")
}
else {
    console.log("ETHIOPIA")
}
    
    