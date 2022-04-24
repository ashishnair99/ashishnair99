// Write a Javascript program that converts a decimal number to a binary number.

// Using Recursion Method
function convertToBinary(number) {
    if (number > 0) {
        return convertToBinary(parseInt(number / 2)) + (number % 2)
    };
    return '';
}
console.log(convertToBinary(10)); // 1010
console.log(convertToBinary(8)); // 1000



// Convert decimal to binary by using toString() function.

console.log((10).toString(2)); // 1010
console.log((20).toString(2)); // 10100
console.log((30).toString(2)); // 11110
console.log((40).toString(2)); // 101000