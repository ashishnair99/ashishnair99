// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should rearrange the elements of nums such that the modified array follows the given conditions:
// ● Every consecutive pair of integers have opposite signs.
// ● For all integers with the same sign, the order in which they were present in nums is preserved.
// ● The rearranged array begins with a positive integer.

// Return the modified array after rearranging the elements to satisfy the above mentioned conditions.

var rearrangeArray = function(nums) {
    let positiveNums = nums.filter(x => x > 0)
    let negativeNums = nums.filter(x => x < 0)
    let result = []

    for (let i = 0; i < nums.length / 2; i++) {
        result.push(positiveNums[i], negativeNums[i])
    }

    return result
};
console.log(rearrangeArray([3, 1, -2, -5, 2, -4]))