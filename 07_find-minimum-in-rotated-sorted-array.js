// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array

/**
 *
 * TIME COMPLEXITY = O(logn)
 * Why?
 * Because on each iteration, the number of elements we are analyze divides by 2
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
 * 	If the number before our middle pointer is greater than what is in our middle pointer, then definitely our middle pointer is our answer since the array is sorted
 *
 * We want to go to the smaller side, so add a condition comparing the value at middle pointer with that at both pointers
 */

function findMin(nums) {
	let lp = 0;
	let rp = nums.length - 1;

	while (lp < rp) {
		let mp = Math.floor(lp + (rp - lp) / 2);

		if (nums[mp] < nums[mp - 1]) {
			return nums[mp];
		}

		if (nums[mp] > nums[lp] && nums[mp] > nums[rp]) {
			lp = mp + 1;
		} else {
			rp = mp - 1;
		}
	}

	return nums[lp];
}

module.exports = { findMin };
