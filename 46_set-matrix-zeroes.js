// https://leetcode.com/problems/set-matrix-zeroes/description/

//SPACE COMPLEXITY = 0(n)
//TIME COMPLEXITY = 0(n)

//TODO: There is a better space complexity, check Neetcode's video

//-----------------------------------------------------------
// SOLUTION
//-----------------------------------------------------------

function setZeroes(matrix) {
	let row = new Array(matrix.length).fill(null, 0, matrix.length);
	let column = new Array(matrix[0].length).fill(null, 0, matrix[0].length);

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 0) {
				row[i] = 0;
				column[j] = 0;
			}
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (row[i] === 0) {
				matrix[i][j] = 0;
			}
			if (column[j] === 0) {
				matrix[i][j] = 0;
			}
		}
	}

	return matrix;
}

//-----------------------------------------------------------
// EXPLANATION/CONCEPT
//-----------------------------------------------------------
/**
 * Since we are to manipulate the array in place
 * create an array to keep track of rows that have zeros
 * create another array to keep track of columns that have zeros
 * Loop through our matrix and update the row and column array accordingly
 * Do another loop replacing the values that ought to be zeros
 */

//-----------------------------------------------------------
// TEST CASES
//-----------------------------------------------------------
console.log(
	setZeroes([
		[1, 1, 1],
		[1, 0, 1],
		[1, 1, 1],
	])
);
console.log(
	setZeroes([
		[0, 1, 2, 0],
		[3, 4, 5, 2],
		[1, 3, 1, 5],
	])
);
