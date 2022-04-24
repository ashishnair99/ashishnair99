// Write a JavaScript program to check whether the last digit of three numbers is the same.

// Method First.
function last_digit(x, y, z) {
    if ((x > 0) && y > 0 && z > 0) {
        return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
    } else
        return false;
}
// last digit of the three given positive integers is same.
console.log(last_digit(20, 30, 400));
console.log(last_digit(-20, 30, 400));



// Method Second.
// Take input by the user
const a = prompt('Enter a first integer = ');
const b = prompt('Enter a second integer = ');
const c = prompt('Enter a third integer = ');

// Find the last digit
const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;

// compare the last digits
if (result1 == result2 && result1 == result3) {
    console.log(`${a}, ${b} and ${c} have the same last digit.`);
} else {
    console.log(`${a}, ${b} and ${c} have different last digit.`);
}