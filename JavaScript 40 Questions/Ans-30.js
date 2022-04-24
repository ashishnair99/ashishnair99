// COINS CHANGE RECURSIVE SOLUTION IN JAVASCRIPT.
// You are given an integer array coins representing coins of different denominations and 
// an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. 
// If that amount of money cannot be made up by any combination of the coins, return -1.

function coinChange(coins, amount) {
    var finalResult = FindMinCount(coins, 0, 0, amount, 0, amount + 1)
    var initialResult =

        function FindMinCount(coins, i, currentSum, amount, count, result) {

            if (amount == 0) {
                return 0
            }
            if (currentSum > amount) {
                return result
            }

            if (currentSum == amount) {
                result = Math.min(count, result)
                return result
            }

            if (i <= coins.length - 1) {
                count++
                result = FindMinCount(coins, i, currentSum + coins[i], amount, count, result)

                count--
                result = FindMinCount(coins, i + 1, currentSum, amount, count, result)
            }
            return result
        }
    if (finalResult == initialResult) {
        return -1
    } else {
        return finalResult
    }
}

console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2], 3))



// COINS CHANGE DYNAMIC PROGRAMMING using Mat[row,col] IN JAVASCRIPT.
function coinChange(coins, amount) {
    if (amount == 0) {

        return 0;
    }

    var dpMat = [];
    for (let row = 0; row <= coins.length; row++) {

        dpMat[row] = []
        for (let col = 0; col <= amount; col++) {
            if (col == 0) {

                dpMat[row][col] = 0;
            } else {

                dpMat[row][col] = Infinity
            }
        }
    }

    for (let row = 1; row <= coins.length; row++) {

        for (let col = 1; col <= amount; col++) {

            if (col - coins[row - 1] >= 0) {

                dpMat[row][col] = Math.min(dpMat[row - 1][col], 1 + dpMat[row][col - coins[row - 1]])
            } else {

                dpMat[row][col] = dpMat[row - 1][col]
            }
        }
    }

    if (dpMat[coins.length][amount] == Infinity) {

        return -1
    } else {

        return dpMat[coins.length][amount]
    }
}
console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2], 3))



// Other Dynamic Programming Method.
function minCoin(coins, amount) {

    let dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 0; i < coins.length; i++) {

        for (let j = coins[i]; j <= amount + 1; j++) {

            if ((dp[j - coins[i]] + 1) < dp[j]) {

                dp[j] = dp[j - coins[i]] + 1;
            }
        }
    }
    if (dp[amount] == Infinity) {

        return -1;
    }

    return dp[amount];
}
console.log(minCoin([1, 2, 5], 11))