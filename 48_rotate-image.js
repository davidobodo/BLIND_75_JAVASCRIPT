/** @format */

// https://leetcode.com/problems/rotate-image/description/

//-----------------------------------------------------------
// SOLUTION
//-----------------------------------------------------------

function rotate(matrix) {
	let left = 0;
	let right = matrix[0].length - 1;
	let top = 0;
	let bottom = matrix.length;

	while (left < right) {
		for (let i = 0; i < right - left; i++) {
			//top right
			let temp1 = matrix[top + i][right];
			matrix[top + i][right] = matrix[top][left + i];

			//bottom right
			let temp2 = matrix[bottom][right - i];
			matrix[bottom][right - i] = temp1;

			//bottom left
			let temp3 = matrix[bottom - i][left];
			matrix[bottom - i][left] = temp2;

			//top left
			matrix[top][left + i] = temp3;
		}

		left++;
		right--;
		top++;
		bottom--;
	}

	return matrix;
}

//-----------------------------------------------------------
// EXPLANATION/CONCEPT
//-----------------------------------------------------------
/**
 * Have four boundaries that shrink depending on iteration conditions
 * before replacing any value, store it in a temp to be used next
 */

//-----------------------------------------------------------
// TEST CASES
//-----------------------------------------------------------
console.log(
	rotate([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
console.log(
	rotate([
		[5, 1, 9, 11],
		[2, 4, 8, 10],
		[13, 3, 6, 7],
		[15, 14, 12, 16],
	])
);
