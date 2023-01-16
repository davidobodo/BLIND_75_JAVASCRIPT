// https://leetcode.com/problems/coin-change

/**
 * TIME COMPLEXITY = O(n*m)
 * Where n is the smount
 * and m is the number of coins
 * Some may still call this O(n^2)
 * Why?
 * Because have a nested loop, meaning for each iteration of the outer loop we would go through all the items in the inner loop
 */

/**
 * SPACE COMPLEXITY = 0(n)
 * Why?
 * Because our array would store all corresponding values from our input

/**
 *
 * EXPLANATION
 * DP ARRAY
 * 
 * Create a DP array with values greater than the value we want to get
 * Run a loop from 1 all the way to the amount we want to get
 * Check how many coins for each coin value are needed to make up an amount
 *
 */

function coinChange(coins, amount) {
	let dp = new Array(amount + 1).fill(amount + 1, 0, amount + 1);
	dp[0] = 0;

	for (let i = 1; i <= amount; i++) {
		for (let j = 0; j < coins.length; j++) {
			if (coins[j] <= i) {
				const remainder = i - coins[j];
				dp[i] = Math.min(dp[i], 1 + dp[remainder]);
			}
		}
	}

	if (dp[dp.length - 1] > amount) {
		return -1;
	}

	return dp[dp.length - 1];
}

module.exports = { coinChange };
