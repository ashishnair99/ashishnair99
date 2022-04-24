// Given an integer n, return the least number of perfect square numbers that sum to n.
// A perfect square is an integer that is the square of an integer(or n*n). 
// For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.


// Using Dynamic Programming to achieve the task.
var numSquares = function(n) {
    var dp = new Array(n + 1).fill(n);
    dp[0] = 0;

    for (var i = 1; i <= n; i++) {
        for (var j = 1; j * j <= i; j++) {
            //dp[i] represents the least number of the perfect square no. that is sum to i.
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    return dp[n];
};
// Driver Code.
console.log(numSquares(12));
console.log(numSquares(13));