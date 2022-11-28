// https://leetcode.com/problems/3sum/description/

//-----------------------------------------------------------
// SOLUTION
//-----------------------------------------------------------

function threeSum(nums) {
	let data = [];
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length - 2; i++) {
		let j = i + 1;
		let k = nums.length - 1;

		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}

		while (j < k) {
			const sum = nums[i] + nums[j] + nums[k];

			if (sum > 0) {
				k--;
			} else if (sum < 0) {
				j++;
			} else {
				data.push([nums[i], nums[j], nums[k]]);
				j++;
				while (nums[j] === nums[j - 1]) {
					j++;
				}
			}
		}
	}

	return data;
}

//-----------------------------------------------------------
// EXPLANATION
//-----------------------------------------------------------
/**
 * Sort given numbers as it makes the algorithm easier
 * Use three pointers
 * Adjust pointers and check if sum is equal to zero
 * BEWARE: Since no duplicates are allowed
 * 	- Check for duplicates in both the first and second pointer and adjust if we encounter one
 */

module.exports = { threeSum };
