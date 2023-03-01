// https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * TIME COMPLEXITY = O(n^m)
 * Why?
 * Because in the worst case scenario the while loop would always run to the last element every single time
 */

/**
 * SPACE COMPLEXITY = 0(n)
 * Why?
 * Because the size of my set would be the size of the inputs given

/**
 * create a set since it has a constant lookup time
 * loop through items in array
 * 	if the previous value of the current item exists then that value is not the start of a new set
 * 	if the previous value of the current item doesnt exist, then this is the start of a consecutive set
 */

function longestConsecutiveSequence(nums) {
	const mySet = new Set(nums);
	let maxSequenceCount = 0;

	for (let i = 0; i < nums.length; i++) {
		const prev = nums[i] - 1;
		const prevExists = mySet.has(prev);

		if (!prevExists) {
			let sequenceCount = 1;
			let next = nums[i] + 1;
			maxSequenceCount = Math.max(maxSequenceCount, sequenceCount);

			while (mySet.has(next)) {
				sequenceCount++;
				next++;
				maxSequenceCount = Math.max(maxSequenceCount, sequenceCount);
			}
		}
	}

	return maxSequenceCount;
}

module.exports = { longestConsecutiveSequence };
