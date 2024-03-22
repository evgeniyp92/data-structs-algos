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
		return parseInt(reversed)
	} else {
		let string = n.toString();
		let reversed = '-' + string.split('-')[1].split('').reverse().join('')
		return parseInt(reversed)
	}
}

function alternateReverseInt(n) {
	const reversed = n.toString().split('').reverse().join('');
	// if (n < 0) {
	// 	return parseInt(reversed) * -1
	// }
	// return parseInt(reversed)
	return parseInt(reversed) * Math.sign(n) // Math.sign() returns 1 or -1 depending if the value is positive or negative
}

module.exports = reverseInt;