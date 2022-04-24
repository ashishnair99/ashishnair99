// Given an n x n matrix where each of the rows and columns is sorted in ascending order, 
// return the kth smallest element in the matrix.

// JavaScript Function to return kth smallest element in a given array.
function kthSmallest(arr, k) {
    // Sort the given array
    arr.sort((a, b) => a - b);

    // Return kth element in the given sorted array.
    return arr[k - 1];
}

// Driver Code.
let arr = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15]
];
k = 8;
console.log("Kth smallest element is " + kthSmallest(arr, k));



// Using Concatenation Method.
var kthSmallest = (matrix, k) => [].concat(...matrix).sort((a, b) => a - b)[k - 1];

// Driver Code.
console.log(kthSmallest([
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15]
], 8))