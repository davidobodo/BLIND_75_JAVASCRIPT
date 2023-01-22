// https://leetcode.com/problems/word-break/

/**
 * TIME COMPLEXITY = O(2^n)
 * Why?
 * Because have a nested whlie loop inside a for loop,
 */

/**
 * SPACE COMPLEXITY = 0(n)
 * Why?
 * Because in the worst case scenario, our output can have all the elements added to it

/**
 *
 * EXPLANATION
 * RECURSION using a DECISION TREE
 * 
 * Run a dfs making two decisions on each index
 * 	1. add the element at that index
 * 	2. do not add the element at that index
 *
 */

function combinationSum(nums, target) {
	let res = [];

	function dfs(currArr, currSum, currIndex) {
		if (currSum === target) {
			res.push(JSON.parse(JSON.stringify(currArr)));
			return;
		}

		if (currSum > target || currIndex >= nums.length) {
			return;
		}

		currArr.push(nums[currIndex]);
		currSum = currSum + nums[currIndex];
		dfs(currArr, currSum, currIndex);

		const val = currArr.pop();
		currSum = currSum - val;
		dfs(currArr, currSum, currIndex + 1);
	}

	dfs([], 0, 0);

	return res;
}

module.exports = { combinationSum };
