// https://leetcode.com/problems/container-with-most-water

/**
 * TIME COMPLEXITY = O(n)
 * Why?
 * Because we would visit all items in our input
 */

/**
 * SPACE COMPLEXITY = 0(1)
 * Why?
 * Because our space which is our 2 variables, would always remain constant irrespective of the amount of numbers in our input
 */

/**
 *
 * EXPLANATION
 * Two pointers
 * Place two pointers at the extreme end
 * 	find the area
 * 	move the pointer with the smallest value
 *
 */

function maxArea(nums) {
	let largest = 0;
	let lp = 0;
	let rp = nums.length - 1;

	while (lp < rp) {
		//calculate current area
		const height = Math.min(nums[lp], nums[rp]);
		const area = height * (rp - lp);

		largest = Math.max(area, largest);

		if (nums[lp] > nums[rp]) {
			rp--;
		} else {
			lp++;
		}
	}

	return largest;
}

module.exports = { maxArea };
