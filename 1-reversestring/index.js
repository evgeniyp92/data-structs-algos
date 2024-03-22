// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	let reversedString = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reversedString += str[i]
	}
	return reversedString;
	// O(n) complexity
}

/**
 * Additional Solutions
 * */

function reverseWithProtoMethod(str) {
	// strings can easily be cast into Arrays and reversed with the reverse() method on the prototype
	const arr = str.split(''); // convert the string into an array of letters
	arr.reverse();
	return arr.join('')
}

function reverseWithForOf(str) {
	let reversedString = '';
	for (const char of str) {
		reversed = char + reversedString;
	}
	return reversedString
}

function reverseWithReduce(str) {
	return str.split('').reduce((reversed, character) => character + reversed, '')
}

module.exports = reverse;