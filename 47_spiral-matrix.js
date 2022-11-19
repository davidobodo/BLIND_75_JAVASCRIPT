/** @format */

// https://leetcode.com/problems/spiral-matrix/description/

//-----------------------------------------------------------
// SOLUTION
//-----------------------------------------------------------

function spiralOrder(matrix) {
	let left = 0;
	let right = matrix[0].length - 1;
	let top = 0;
	let bottom = matrix.length - 1;
	let res = [];

	while (left <= right && top <= bottom) {
		//top elements
		for (let i = 0; i <= right - left; i++) {
			res.push(matrix[top][left + i]);
		}

		//right elements
		for (let i = 1; i <= bottom - top; i++) {
			res.push(matrix[top + i][right]);
		}

		//bottom elements
		for (let i = 1; i <= right - left; i++) {
			if (bottom > top) {
				res.push(matrix[bottom][right - i]);
			}
		}

		//left elements
		for (let i = 1; i < bottom - top; i++) {
			if (right > left) {
				res.push(matrix[bottom - i][left]);
			}
		}

		//update boundary
		left++;
		right--;
		top++;
		bottom--;
	}

	return res;
}

//-----------------------------------------------------------
// EXPLANATION/CONCEPT
//-----------------------------------------------------------
/**
 * Have four boundaries that shrink depending on iteration conditions
 * NOTE: Be observant for matrices that are one dimensional (reason why we have nested if statements)
 */

//-----------------------------------------------------------
// TEST CASES
//-----------------------------------------------------------
console.log(
	spiralOrder([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
console.log(
	spiralOrder([
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
	])
);
