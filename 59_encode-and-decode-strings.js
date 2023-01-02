function encodeDecode(words) {
	// const encode = words.join("#45");
	// console.log({ encode });
	// const decode = encode.split("#45");
	// console.log({ decode });

	function encode(words) {
		let encodedString = "";

		for (let i = 0; i < words.length; i++) {
			const word = words[i];
			const length = word.length;

			encodedString = encodedString + length;
			encodedString = encodedString + "#";
			encodedString = encodedString + word;
		}

		console.log(encodedString, "TEH ENCODED");

		return encodedString;
	}

	function decode(encoded) {
		console.log(encoded, "TO DECODE");
		let output = [];
		let i = 0;

		while (i < encoded.length) {
			let j = i;

			while (encoded[j] !== "#") {
				j++;
			}

			let wordLength = j - i;
			output.push(encoded.slice(i, wordLength + 1));
			i = j + 1 + wordLength;
		}

		console.log(output);

		return output;
	}

	decode(encode(words));
}

console.log(encodeDecode(["lin#45t", "code", "love", "you"]));

// lint:;code:;love:;you
