// https://leetcode.com/problems/maximum-product-subarray/description/

//-----------------------------------------------------------
// SOLUTION
//-----------------------------------------------------------

function maxProductSubarray(nums) {
	let result = nums[0];
	let currMax = nums[0];
	let currMin = nums[0];

	for (let i = 1; i < nums.length; i++) {
		const storedCurrMax = currMax;
		currMax = Math.max(storedCurrMax * nums[i], currMin * nums[i]);
		currMin = Math.min(storedCurrMax * nums[i], currMin * nums[i]);

		currMax = Math.max(currMax, nums[i]);
		currMin = Math.min(currMin, nums[i]);

		result = Math.max(result, currMax);
	}

	return result;
}

//-----------------------------------------------------------
// EXPLANATION
//-----------------------------------------------------------
/**
 * Loop through the given array and keep track of both the minimum product and maximum product
 * We keep track of the minimum because, if you multiple two negative numbers we get a positive number
 *
 * On each iteration first analyse what the currMax and currMin would be if our latest number was added to the mix
 * Then analyze both again is our latest number as made to stand alone without being added to the mix
 *
 * After which check for the maximum
 */

module.exports = { maxProductSubarray };
