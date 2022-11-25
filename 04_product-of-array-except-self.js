function productExceptSelf(nums) {
	let preFix = [];
	let postFix = new Array(nums.length).fill(1, 0, nums.length);
	let output = [];

	preFix[0] = 1;

	for (let i = 1; i < nums.length; i++) {
		preFix[i] = preFix[i - 1] * nums[i - 1];
	}

	for (let i = postFix.length - 2; i >= 0; i--) {
		postFix[i] = postFix[i + 1] * nums[i + 1];
	}

	for (let i = 0; i < nums.length; i++) {
		output[i] = preFix[i] * postFix[i];
	}

	return output;
}

// function productExceptSelfConstantSpace(nums) {
// 	let output = [];
// 	output[0] = 1;

// 	for (let i = 1; i < nums.length; i++) {
// 		output[i] = output[i - 1] * nums[i - 1];
// 	}

// 	for (let i = output.length - 2; i >= 0; i--) {

//         // output[i] = output[i] * postfix;
// 		for (let j = i + 1; j < nums.length; j++) {
//             output[i] = output[i] * nums[j];
// 		}

// 	}

// 	return output;
// }
