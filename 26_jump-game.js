// https://leetcode.com/problems/jump-game/description/

/**
 *
 * SPACE COMPLEXITY = O(1)
 * Because we make use of only one variable(i.e goal) which never changes irrespective of the number of items in our nums array
 *
 * TIME COMPLEXITY = O(n)
 * Because we must loop through all the items in our nums array at least once
 */

function canJump(nums) {
	let goal = nums.length - 1;

	for (let i = nums.length - 2; i >= 0; i++) {
		if (i + nums[i] >= goal) {
			goal = i;
		}
	}

	if (goal === 0) {
		return true;
	} else {
		return false;
	}
}

module.exports = { canJump };
