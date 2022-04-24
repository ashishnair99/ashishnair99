// Given a string containing digits from 2-9 inclusive, 
// return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digits to letters (just like on the telephone buttons) is given below.

// Letter Combinations of a Phone Number.
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return []
    }

    let res = []
    let map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    function helper(i, cur) {
        if (digits.length === cur.length) {
            res.push(cur)
            return;
        }

        [...map[digits[i]]].forEach((s) => helper(i + 1, cur + s))
    }

    helper(0, "")
    return res
};

// Driver Code.
console.log(letterCombinations('23'))