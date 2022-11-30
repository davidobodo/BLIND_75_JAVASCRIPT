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
