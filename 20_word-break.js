// https://leetcode.com/problems/word-break/

/**
 * TIME COMPLEXITY = O(n^2)
 * Why?
 * Because have a nested whlie loop inside a for loop,
 */

/**
 * SPACE COMPLEXITY = 0(n)
 * Why?
 * Because our array would store all corresponding values from our input

/**
 *
 * EXPLANATION
 * DP -Two pointers whereby left moves till it hits right, before we move right again
 * 
 * Initialize a DP with false values
 * 
 * Start a two pointer solution with right pointer at 1 and left pointer at zero
 * keep moving left pointer until it reaches right pointer
 * 	on each movement check if the value within the range of the left and right pointer can be found in our dictionary
 * 	also ascertain that the previous value in the DP array is TRUE (i.e we have been able to find a word till that index)
 *
 */

function wordBreak(s, wordDict) {
	let dp = new Array(s.length + 1).fill(false, 0, s.length + 1);
	dp[0] = true;

	for (j = 1; j <= s.length; j++) {
		let i = 0;

		while (i < j) {
			if (dp[i] && wordDict.includes(s.substring(i, j))) {
				dp[j] = true;
				break;
			}
			i++;
		}
	}

	return dp[dp.length - 1];
}

module.exports = { wordBreak };
