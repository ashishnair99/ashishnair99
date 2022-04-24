// Write a JavaScript program to generate fibonacci series up to n terms 
// (assume first two terms are 0 and 1 respectively).

// Method First
function fib(n) {
    if (n <= 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}
// Driver Code.
let n = 8;
console.log(fib(n)); // 21



// Method Second by using For Loop.
// take input from the user
const number = parseInt(prompt('Enter the Number of Terms: '));
let n1 = 0,
    n2 = 1,
    nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}