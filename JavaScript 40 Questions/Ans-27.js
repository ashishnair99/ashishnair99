// You are given an integer array nums. A number x is lonely when it appears only once, and 
// no adjacent numbers (i.e. x + 1 and x - 1) appear in the array.
// Return all lonely numbers in nums. You may return the answer in any order.

var findLonely = function(nums) {
    let lonely = [];
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    for (let [key, value] of map) {
        if (value == 1 && !(map.has(key + 1)) && !(map.has(key - 1))) {
            lonely.push(key);
        }
    }
    return lonely;
};

// Driver code.
console.log(findLonely([10, 6, 5, 8])) // 10, 8
console.log(findLonely([1, 3, 5, 3])) // 1, 5