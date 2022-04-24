// Write a Javascript program that calculates the sum of n natural numbers using Recursion.

// Method First
// Returns sum of first n natural numbers
function recurSum(n) {
    if (n <= 1)
        return n;
    return n + recurSum(n - 1);
}

// Driver code
let n = 5;
console.log(recurSum(n));



// Second Solution.
function findSum(n) {
    if (n <= 1) {
        return n;
    } else {
        return n + findSum(n - 1);
    }
}

// Driver Code
var n1 = 5,
    n2 = 7,
    n3 = 6;
console.log("Sum of first " + n1 + " natural numbers: " + findSum(n1));
console.log("Sum of first " + n2 + " natural numbers: " + findSum(n2));
console.log("Sum of first " + n3 + " natural numbers: " + findSum(n3));