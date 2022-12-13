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
