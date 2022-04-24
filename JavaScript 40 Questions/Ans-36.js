// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// Longest Consecutive Sequence JavaScript Problem.
var longest_Consecutive = function(nums) {
    // Handle base case of empty array
    if (!nums.length) return 0;

    // lookup nums by value
    const set = new Set(nums);
    let max = 0;

    for (const num of set) {
        // Make sure we are starting at the beginning of the sequence
        if (set.has(num - 1)) continue;

        let currentNum = num;
        let currentMax = 1;

        // Look numbers that makes a Consecutive Sequence in the array.
        while (set.has(currentNum + 1)) {
            currentNum++;
            currentMax++;
        }
        // Update max
        max = Math.max(max, currentMax);
    }

    return max;
};

// Driver Code.
nums = [100, 4, 200, 1, 3, 2];
console.log(longest_Consecutive(nums));

nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longest_Consecutive(nums));