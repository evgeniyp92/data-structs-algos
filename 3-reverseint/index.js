// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	if (n >= 0) {
		let string = n.toString();
		let reversed = string.split('').reverse().join('')
		console.log(reversed)
		return Number(reversed)
	} else {
		let string = n.toString();
		let reversed = '-' + string.split('-')[1].split('').reverse().join('')
		return Number(reversed)
	}
}

module.exports = reverseInt;
