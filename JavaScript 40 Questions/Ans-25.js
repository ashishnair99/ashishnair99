// Write a JavaScript program that performs linear search.

// First Method.
function linearSearch(arr, target) {
    for (let i in arr) {
        if (arr[i] === target) return i
    }
    return -1
}
console.log(linearSearch([1, 2, 3, 4], 1)) // 0
console.log(linearSearch([1, 2, 3, 4], 4)) // 3
console.log(linearSearch([1, 2, 3, 4], 6)) // -1


//  Second Method.
function linearSearch(arr, item) {
    // Go through all the elements of arr to look for item.
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) { // Found it!
            return i;
        }
    }
    // Item not found in the array.
    return null;
}
// Driver Code.
let arr = [1, 2, 3, 4];
let item = 4;
console.log(linearSearch(arr, item))