/** @format */

function exists(board, word) {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			const foundFirstLetter = board[i][j] === word.charAt(0);

			const foundRemainingLetters = dfs(board, i, j, 0, word);

			if (foundFirstLetter && foundRemainingLetters) return true;
		}
	}

	return false;
}

function dfs(board, i, j, count, word) {
	//we have found the entire word
	if (count === word.length) {
		return true;
	}

	//we are out of bound
	if (i < 0 || i >= board.length || j < 0 || j >= board[i].length) {
		return false;
	}

	//the position we are looking at doesnt contain what we are looking for
	if (board[i][j] !== word.charAt(count)) {
		return false;
	}

	const temp = board[i][j];
	board[i][j] = "";

	const foundRemaining = dfs(board, i + 1, j, count + 1, word) || dfs(board, i - 1, j, count + 1, word) || dfs(board, i, j + 1, count + 1, word) || dfs(board, i, j - 1, count + 1, word);

	board[i][j] = temp;

	return foundRemaining;
}
