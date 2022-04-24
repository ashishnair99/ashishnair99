// Write a JavaScript program to find the factorial of a number.

// Method First by using Simple Iteration.
var number = 5
if (number < 0) {
    console.log('Error');
}
// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(fact);
}



// Method Second by using Recursion. 
function factorial(num) {
    if (num === 0 || num === 1) {
        return num;
    }
    return num * factorial(num - 1);
}

let n = 8;
console.log(factorial(n));




// Method Third by taking input from the user.
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}