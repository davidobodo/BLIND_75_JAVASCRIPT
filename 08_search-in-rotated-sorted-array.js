// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * TIME COMPLEXITY = O(logn)
 * Why?
 * Because on each iteration, the number of elements we analyze divides by 2
 */

/**
 * SPACE COMPLEXITY = 0(1)
 * Why?
 * Because our space which is our 2 variables, would always remain constant irrespective of the amount of numbers in our input
 */

/**
 *
 * EXPLANATION
 * TWO POINTERS
 *
 * Initialize two pointers, one at the beginning and one at the end
 * Get a middle pointer
 * 	check if the value at our middle pointer is equal to the value we are looking for
 *
 * Analyze the sorted portion
 * 	Adjust pointers from there
 */

function searchInRotated(nums, target) {
	let lp = 0;
	let rp = nums.length - 1;

	while (lp <= rp) {
		const mp = Math.floor((rp - lp) / 2 + lp);

		if (nums[mp] === target) return mp;

		if (nums[mp] >= nums[lp]) {
			if (target > nums[mp] || target < nums[lp]) {
				lp = mp + 1;
			} else {
				rp = mp - 1;
			}
		} else {
			if (target < nums[mp] || target > nums[rp]) {
				rp = mp - 1;
			} else {
				lp = mp + 1;
			}
		}
	}

	return -1;
}

module.exports = { searchInRotated };
