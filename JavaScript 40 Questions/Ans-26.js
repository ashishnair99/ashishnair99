// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.

// First Method 
function findDuplicate(nums) {
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == i + 1) continue;
        else if (nums[nums[i] - 1] != nums[i]) {
            t = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = t;
            i--;
        }
    }
    res = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            res = nums[i];
            break;
        }
    }
    return res;
}
console.log(findDuplicate([3, 4, 3, 2, 1]))


// Using indexOf() method
const numbers = [3, 1, 3, 4, 2];
const duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
console.log(duplicates);


// Second Method by using Set() object.
const arr = [3, 1, 3, 4, 2];

const set = new Set(arr);

const duplicate = arr.filter(item => {
    if (set.has(item)) {
        set.delete(item);
    } else {
        return item;
    }
});

console.log(duplicate);