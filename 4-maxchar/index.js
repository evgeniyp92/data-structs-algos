// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const seen = {}
	for (const char of str) {
		if (!seen[char]) {
			seen[char] = 1
		} else {
			seen[char] = seen[char] + 1
		}
	}
	let maxchar;
	for (const char in seen) {
		if (!maxchar) maxchar = char
		if (seen[maxchar] < seen[char]) maxchar = char
	}
	return maxchar
}

function maxCharAlternate(str) {
	let max = 0;
	let maxChar = ''
	const charMap = {};

	for (let char of str) {
		if (charMap[char]) {
			charMap[char]++
		} else {
			charmMap[char] = 1
		}
	}

	for (const charMapKey in charMap) {
		if (charMap[charMapKey] > max) {
			max = charMap[charMapKey]
			maxChar = charMapKey
		}
	}

	return maxChar
}

module.exports = maxChar;
