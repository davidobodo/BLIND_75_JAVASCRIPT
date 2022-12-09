function pacificAtlantic(heights) {
	let rows = heights.length - 1;
	let columns = heights[0].length - 1;

	let pacificSet = new Set();
	let atlanticSet = new Set();

	let res = [];

	for (let i = 0; i <= rows; i++) {
		dfs(i, 0, pacificSet, heights[i][0]);
		dfs(rows, 0, atlanticSet, heights[rows][0]);
	}

	for (let i = 0; i <= columns; i++) {
		dfs(i, i, pacificSet, heights[i][0]);
		dfs();
	}

	return res;

	function dfs(row, column, visit, prevHeight) {}
}
