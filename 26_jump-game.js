// https://leetcode.com/problems/jump-game/description/

/**
 * TIME COMPLEXITY = O(n)
 * Why?
 * Because have a nested whlie loop inside a for loop,
 */

/**
 * SPACE COMPLEXITY = 0(1)
 * Why?
 * Because we would always have just one single variable irrespective of our input

/**
 *
 * EXPLANATION
 * GREEDY ALGORITHM
 * 
 * position a pointer (i.e goal post) at the end of the given array
 * run a loop from the end of the array till the beginning
 * 	if the sum of the value at any index and its index is greater or equal to our current goal, then adjust the goal
 *  
 * When loop is complete check if our goal is at the first index
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
