// https://leetcode.com/problems/two-sum/

/**
 *
 * TIME COMPLEXITY = O(n)
 * Why?
 * Because we have only one loop, meaning in worst case scenario we would go through "n" number of elements, which is the number of items in our "nums"
 */

/**
 * Space complexity = 0(n)
 * Why?
 * Because in the worst case scenario, our "map" used for storage would be filled with "n - 1" (i.e If our compliment is the last number) number of elements
 */

/**
 *
 * EXPLANATION
 * Iterate through elements, check if elements compliment is already in the hashmap
 * If the compliment is not, then add the element into the hashmap, if not we have arrived at a solution
 */

function twoSum(nums, target) {
	let map = {};

	for (let i = 0; i < nums.length; i++) {
		const compliiment = target - nums[i];
		if (map[compliiment] === undefined) {
			map[nums[i]] = i;
		} else {
			return [i, map[compliiment]];
		}
	}
}

module.exports = { twoSum };
