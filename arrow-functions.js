/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbersVanilla(a,b){
    return a+b
}
let addedVanillaNum = addTwoNumbersVanilla(3,7)
console.log(addedVanillaNum)

// Arrow Function With Parameters
const addTwoNumbersArrow = (a,b) => {
    return a+b
}
let addedArrowNum = addTwoNumbersArrow(5,10)
console.log(addedArrowNum)

// Single Line Arrow Function With Parameters
const addTwoNumbersArrowSingleLine = (a,b) => a+b;
addedArrowNum = addTwoNumbersArrowSingleLine(21, 20)
console.log(addedArrowNum)

// Implicit Returns

//func with single parameter does not need ()
const saySomething = message => console.log(message)
saySomething("Howdy")

//func with no parameter needs empty () in order to declare itself a function
const sayHello = () => console.log("Hi, how are ya?")
sayHello()


// Returning Multiple Lines
//Multiple line of code need to wrapped in () after the return statement (fat arrow)
const multipleLines = () => ("Hello, looks at my multiple lines")
console.log(multipleLines())