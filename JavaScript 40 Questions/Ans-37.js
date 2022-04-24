// You are given a 0-indexed integer array nums and an integer pivot. 
// Rearrange nums such that the following conditions are satisfied:

// - Every element less than pivot appears before every element greater than pivot.
// - Every element equal to pivot appears in between the elements less than and greater than pivot.
// - The relative order of the elements less than pivot and the elements greater than pivot is maintained.

// Partition Array According to Given Pivot.
function pivotArray(nums, pivot) {
    element = new Array(nums.length);

    x = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) element[x++] = nums[i];
    }

    for (i = 0; i < nums.length; i++) {
        if (nums[i] == pivot) element[x++] = nums[i];
    }

    for (i = 0; i < nums.length; i++) {
        if (nums[i] > pivot) element[x++] = nums[i];
    }

    return element;
}

// Driver Code.
nums = [9, 12, 5, 10, 14, 3, 10];
pivot = 10;
console.log(pivotArray(nums, pivot)) // [9,5,3,10,10,12,14]