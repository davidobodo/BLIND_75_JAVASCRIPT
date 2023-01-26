// https://leetcode.com/problems/jump-game/description/

/**
 * TIME COMPLEXITY = O(n^2)
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
 * DP - 2 X 2 Matrix
 * 
 * Create an m*n matrix
 * Fill each cell in the matrix with the value 1
 * Loop through the filled matrix, adding adjacent cells together 
 *
 */

function canJump(nums) {
	let goal = nums.length - 1;

	for (let i = nums.length - 2; i >= 0; i--) {
		const value = nums[i];
		if (value + i >= goal) {
			goal = i;
		}
	}

	return goal === 0 ? true : false;
}

module.exports = { canJump };
