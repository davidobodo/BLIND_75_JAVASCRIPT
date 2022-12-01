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
