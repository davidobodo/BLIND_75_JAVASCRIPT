// https://leetcode.com/problems/pacific-atlantic-water-flow/

/**
 * TIME COMPLEXITY = O(n^2)
 * Why?
 * Because we have two o(n) and one o(n^2)
 */

/**
 * SPACE COMPLEXITY = 0(n)
 * Why?
 * The array where we would store our results

/**
 *
 * We analyze the columns and rows seperately
 */

function pacificAtlantic(heights) {
	let pacific = new Set();
	let atlantic = new Set();

	let rows = heights.length - 1;
	let columns = heights[0].length - 1;

	let res = [];

	//Analyze columns
	for (let i = 0; i <= columns; i++) {
		//Values that can reach pacific
		dfs(0, i, pacific, heights[0][i]);
		//Values that can reach atlantic
		dfs(rows, i, atlantic, heights[rows][i]);
	}

	//Analyze rows
	for (let i = 0; i <= rows; i++) {
		//Values that can reach pacific
		dfs(i, 0, pacific, heights[i][0]);
		//Values that can reach atlantic
		dfs(i, columns, atlantic, heights[i][columns]);
	}

	for (let i = 0; i < heights.length; i++) {
		for (let j = 0; j < heights[i].length; j++) {
			if (pacific.has(`${i} ${j}`) && atlantic.has(`${i} ${j}`)) {
				res.push([i, j]);
			}
		}
	}

	return res;

	function dfs(row, column, visit, prevHeight) {
		//We have analyzed this
		if (visit.has(`${row} ${column}`)) {
			return;
		}

		//out of bound
		if (row < 0 || column < 0 || row > rows || column > columns) {
			return;
		}

		if (heights[row][column] < prevHeight) {
			return;
		}

		visit.add(`${row} ${column}`);

		dfs(row + 1, column, visit, heights[row][column]);
		dfs(row - 1, column, visit, heights[row][column]);
		dfs(row, column + 1, visit, heights[row][column]);
		dfs(row, column - 1, visit, heights[row][column]);
	}
}

module.exports = { pacificAtlantic };
