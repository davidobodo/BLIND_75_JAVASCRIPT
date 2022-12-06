function decodeWays(s) {
	let dp = {
		[s.length]: 1,
	};

	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === "0") {
			dp[i] = 0;
		} else {
			dp[i] = dp[i + 1];
		}

		if (i + 1 < s.length) {
			if (s[i] === "1" || (s[i] === "2" && ["0", "1", "2", "3", "4", "5", "6"].includes(s[i + 1]))) {
				dp[i] += dp[i + 2];
			}
		}
	}

	return dp[0];
}

module.exports = { decodeWays };
