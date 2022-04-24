// JavaScript function that takes two parameters and swap their numerical values, also print their values within the function.

// First Method by Using Bitwise XOR.
let a = 1,
    b = 2;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log('After Swapping a is now :', a);
console.log('After Swapping b is now :', b);



// Second Method by using function.
var c = 5,
    d = 8;
d = (function(c) {
    return c
}(c, c = d));

console.log("c : " + c + "  d :  " + d);



// Third Method by Using Arithmetic Operators.
let x = 20,
    y = 10;

// Code to swap 'x' and 'y'
// x now becomes 15
x = x + y;

// y becomes 10
y = x - y;

// x becomes 5
x = x - y;

console.log("After Swapping : x = " + x + ", y = " + y)



// Fourth Method by using Multiplication and division. 
var x = 10;
var y = 5;

// Code to swap 'x' and 'y'
x = x * y; // x now becomes 50
y = x / y; // y becomes 10
x = x / y; // x becomes 5

console.log("After Swapping : " + " x = " +
    x + ", y = " + y);




// Fifth Method by using A mixture of bitwise operators and arithmetic operators
function swap(a, b) {
    // same as a = a + b
    a = (a & b) + (a | b);

    // same as b = a - b
    b = a + (~b) + 1;

    // same as a = a - b
    a = a + (~b) + 1;

    console.log("After swapping: a = " + a + ", b = " + b);
}

let a = 5,
    b = 10;

// Function Call
swap(a, b);