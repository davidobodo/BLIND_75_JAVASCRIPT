function encodeDecode(words) {
	function encode(words) {
		let encodedString = "";

		for (let i = 0; i < words.length; i++) {
			const word = words[i];
			const length = word.length;

			encodedString = encodedString + length;
			encodedString = encodedString + "#";
			encodedString = encodedString + word;
		}

		return encodedString;
	}

	function decode(encoded) {
		let output = [];
		let i = 0;

		while (i < encoded.length) {
			let j = i;

			while (encoded[j] !== "#") {
				j++;
			}

			let wordLength = parseInt(encoded.slice(i, j));

			let decodedWord = encoded.slice(j + 1, j + 1 + wordLength);

			output.push(decodedWord);

			i = j + 1 + wordLength;
		}

		return output;
	}

	const encodedWords = encode(words);

	console.log(encodedWords, "==========THE ENCODED WORDS");

	const decodedWords = decode(encodedWords);

	console.log(decodedWords, "==========THE DECODED WORDS");
}

console.log(encodeDecode(["lin#45t", "code", "love", "you"]));

module.exports = { encodeDecode };
