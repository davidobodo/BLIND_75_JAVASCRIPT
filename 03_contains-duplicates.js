// https://leetcode.com/problems/contains-duplicate/

/**
 *
 * TIME COMPLEXITY = O(n)
 * Why?
 * Because in the worst case scenario our loop would run only once through our input elements
 */

/**
 * SPACE COMPLEXITY = 0(n)
 * Why?
 * Because our space which is our hashmap, could potential have all our input elements
 */

/**
 *
 * EXPLANATION
 * Hashmap
 * Iterate through input elements, and check if a key with that value already exists in our hashmap
 */
function containsDuplicates(nums) {
	const map = {};

	for (let i = 0; i < nums.length; i++) {
		if (map[nums[i]] !== undefined) {
			return true;
		} else {
			map[nums[i]] = 1;
		}
	}

	return false;
}

module.exports = { containsDuplicates };
