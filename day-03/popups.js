// alert() method displays an alert box with a specified message and an OK button.
alert('Welcome to 30DaysOfJavaScript')

// prompt() displays a box with an input on your browser to take input values
// the input data can be stored in a variable. Second param is optional
let number = prompt('Enter number', 'number goes here')
console.log(number)

/*
    confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button. 
    A confirm box is often used to ask permission from a user to execute something. 
    Window confirm() takes a string as an argument. Clicking the OK yields true value
    Clicking the Cancel button yields false value.
*/
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box
