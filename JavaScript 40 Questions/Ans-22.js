// Write a JavaScript program that checks whether the number is palindrome or not.

function checkPalindrome(str) {

    var len = str.length;

    // Traversing through the string
    // upto half its length
    for (var i = 0; i < len / 2; i++) {

        // Comparing ith character
        // from starting and len-ith
        // character from end
        if (str[i] != str[len - i - 1])
            return false;
    }

    // If the above loop doesn't return then it is palindrome
    return true;
}

// Driver Code
let st = "121"; // 23 is not a palindrome number
if (checkPalindrome(st) == true)
    console.log("This is a Palindrome number.");
else
    console.log("This is not a Palindrome number.");