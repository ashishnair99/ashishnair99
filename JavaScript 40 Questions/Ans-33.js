// Given an integer array nums, return the number of arithmetic subarray of nums.
// An integer array is called arithmetic if it consists of at least three elements and 
// if the difference between any two consecutive elements is the same.
// A subarray is a contiguous subsequence of the array.

var ArithmeticSubArrays = function(nums) {
    let count = 0,
        current = 0

    for (let i = 2; i < nums.length; i++) {

        if (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
            current += 1
            count += current

        } else {
            current = 0
        }
    }
    return count
};

// Print Output.
console.log(ArithmeticSubArrays([1, 2, 3, 4]))