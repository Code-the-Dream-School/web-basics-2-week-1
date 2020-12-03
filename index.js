/* Challenge #1
 * Create a variable and print the value
 *
 * Steps:
 * 1. Create a variable and assign it any value*/
 /* 2. Use `console.log` to print out your variable

 /* Example Output: n/a
 */

let words = "Let me fly"; //declare 'words' variable
console.log(words); //log 'words' to console

/* Challenge #2
 * Create variables for your first and last name then print your full name
 *
 * Steps:
 * 1. Create a variable called `firstName` and assign your first name as the string value
 * 2. Create a variable called `lastName` and assign your last name as the string value
 * 3. Use `console.log` to print out your full name (make sure there's a space!)
 *
 * Example Output: "Elizabeth Thompson"
 */

let firstName = "Alton"; //assign 'firstName' variable
let lastName = "Michaux"; //assign 'lastName' variable

console.log(firstName, lastName); //log 'firstName' and 'lastName' to console

/* Challenge #3
 * Calculate the total price rounded to two decimals
 *
 * Steps:
 * 1. Create a variable called `price` and assign a float value (ex. 9.98)
 * 2. Create a variable called `quantity` and assign an integer value (ex. 5)
 * 3. Create a variable called `total` and assign the value of `price` multiplied by `quantity`
 * 4. Use `console.log` to print out the `total` (rounded to the nearest two decimals)
 *
 * Example Output: "$49.90"
 */

const price = "9.98"; //declare 'price' variable
let quantity = "8"; //declare 'quantity' variable
let total = price * quantity; //declare 'total' variable by multiplying 'price' and 'quantity'

console.log(total.toFixed(2)); //log total to console, add '.toFixed()' method for decimals

/* Challenge #4
 * Declare a variable and conditionally assign it a value
 *
 * Steps:
 * 1. Create a variable called `weather` and assign "Rainy" as the string value
 * 2. Declare a variable called `message` and don't assign it a value
 * 3. Create a conditional statement that checks if `weather` is equal to "Sunny"
 * 4. If `weather` meets the condition above, then set `message` equal to "Yay! It's sunny outside"
 * 5. Add an `else` clause that sets `message` equal to "Aww! It's not sunny outside"
 * 6. Use `console.log` to print out the value of `message`
 *
 * Example Output: "Aww! It's not sunny outside"
 */

const weather = "Rainy"; //declare 'weather' variable
let message; //declare 'message' variable to a blank value
if (weather === 'Sunny') { //write a conditional statement determining the programs actions based on 'weather' variable
    message = "Yay! It's sunny outside!"
} else { //condition if false
    message = "Aww! It's not sunny outside."
}

console.log(message); //log 'message' to console

/* Challenge #5
 * Create a function that returns any string
 *
 * Steps:
 * 1. Create a function called `myFunction` using the function keyword
 * 2. Add a return statement in your function which returns a random string
 * 3. Use `console.log` to print out the output of `myFunction()`
 *
 * Example Output: "I called a function!"
 */

function myFunction() { //create function
    randStr = "I love coding!"; //declare variable that stores the string
    console.log(typeof randStr);  //instructed console to display the type of output to make sure it is dispalying a string
    return randStr; //return the variable 'randStr'
}

console.log(myFunction()); //log 'myFunction()' to console

/* Challenge #6
 * Rewrite the function in Challenge #5 as an arrow function
 *
 * Steps:
 * 1. Create a function called `myArrowFunction` using the arrow syntax
 * 2. Add a return statement in your function which returns a random string
 * 3. Use `console.log` to print out the output of `myArrowFunction()`
 *
 * Example Output: "I called an arrow function!"
 */

const myArrowFunction = () => { return Math.random().toString(5).substr(2, 3); //created arrow function that generates a random number, converts it to a string starting it at the second position and extends for two additional characters
};

console.log(myArrowFunction()); //logged 'myArrowfunction' with the argument of 12

/* Challenge #7
 * Create a function that accepts a string argument and returns it in all uppercase
 *
 * Steps:
 * 1. Create a function called `stringToUpper`
 * 2. Add a parameter called `str` in your function signature
 * 3. Add a return statement in your function which returns the input string in all uppercase letters
 * 4. Use `console.log` to print out the output of `stringToUpper(str)`
 *
 * Example Output: "WHY AM I SCREAMING"
 */

let stringToUpper = (str) => { //created function 'stringToUpper' that takes the variable 'str' as an argument and capitales the message
    return str.toUpperCase(); //returns variable 'str' as all uppercase letters using the method '.toUpperCase'
}

console.log(stringToUpper("always")); //logged 'stringToUpper' to console using the string 'always'

/* Challenge #8
 * Create a function that accepts a number argument and returns double its value
 *
 * Steps:
 * 1. Create a function called `multiplyByTwo`
 * 2. Add a parameter called `number` in your function signature
 * 3. Add a return statement in your function which returns `number` times two
 * 4. Create a variable called `num1` and assign it to the result of `multiplyByTwo(1)`
 * 5. Create a variable called `num2` and assign it to the result of `multiplyByTwo(5)`
 * 6. Create a variable called `num3` and assign it to the result of `multiplyByTwo(10)`
 * 7. Use `console.log` to print out the value of `num1`, `num2`, and `num3`
 *
 * Example Output: 2, 10, 20
 */

const multiplyByTwo = (number) => { //created the 'multiplyByTwo' function with 'number' argument
    return number * 2; //returns variable 'number' times 2
}

const num1 = multiplyByTwo(1); 
const num2 = multiplyByTwo(5); //'num1','num2','num3' all store 'multiplyByTwo' functions with different number arguments
const num3 = multiplyByTwo(10);

console.log(num1, num2, num3); //logs the results of 'num1', 'num2' and 'num3' to the console