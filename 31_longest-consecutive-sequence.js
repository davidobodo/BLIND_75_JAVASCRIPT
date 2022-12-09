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
