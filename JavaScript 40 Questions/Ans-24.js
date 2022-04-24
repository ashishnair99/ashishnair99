// Write a JavaScript program that checks whether the string is palindrome or not.

function palindrome(str) {

    var num = str.length;
    var mid = Math.floor(num / 2);

    for (var i = 0; i < mid; i++) {

        if (str[i] !== str[num - 1 - i]) {

            return "The number is not a Palindrome.";
        }
    }

    return "The number is Palindrome.";
}
// Print the Output.
console.log(palindrome("malayalam")); // The number is Palindrome.
console.log(palindrome("hindi")); // The number is not a Palindrome.