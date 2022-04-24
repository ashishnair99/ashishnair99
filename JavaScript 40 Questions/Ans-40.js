// You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed, the only constraint stopping you from robbing
// each of them is that adjacent houses have security systems connected and 
// it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.

// Using Dynamic Programming.
var rob = function(nums) {
    var len = nums.length;
    var dp = [0, 0];
    for (var i = len - 1; i >= 0; i--) {
        dp = [Math.max(dp[0], nums[i] + dp[1]), dp[0]];
    }
    return dp[0];
}

// Driver Code.
console.log(rob([2, 7, 9, 3, 1]));



// Method 2.
function rob(nums) {
    var sums = 0;
    var sum = 0;
    var i, j;

    for (i = 0; i < nums.length; i++, i++) {
        sums += nums[i];
    }
    for (j = 1; j < nums.length; j++, j++) {
        sum += nums[j];
    }
    r = Math.max(sums, sum);
    return r;
}
console.log(rob([2, 7, 9, 3, 1]))