// Write a JavaScript function that reverses a string passed to it as argument and returns the reversed string.

function reverseString(str) {

    var newString = "";

    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]; // or newString = newString + str[i];
    }

    return newString;
}
// Print the String in reverse.
console.log(reverseString("ashish"));