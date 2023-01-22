// https://leetcode.com/problems/house-robber-ii/

/**
 * TIME COMPLEXITY = O(n)
 * Why?
 * Because have a nested whlie loop inside a for loop,
 */

/**
 * SPACE COMPLEXITY = 0(n)
 * Why?
 * Because our object would store all the corresponding the decode ways

/**
 *
 * EXPLANATION
 * DP - Hashmap DP
 * 
 * For this, we solve from back to front using a decrementing for loop
 * If our string had only one character (i.e the last character then there would only be one way to decode it)
 * After that we keep decrementing our loop and performing certain checks
 *
 */

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
