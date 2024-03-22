// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	// optimistic by default
	let palindrome = true;
	// set up a for loop
	for (let i = 0; i <  str.length; i++) {
		// move the pointer to the right along with a mirrored pointer from the end of the array, going left. if characters
		// dont match, its not a palindrome
		if (str[i] !== str[str.length - (i + 1)]) {
			palindrome = false
		}
	}
	return palindrome
}

// Alternate solution with reverse method
function palindromeWithReversed(str) {
	const reversed = str.split('').reverse().join('')
	return str === reversed;
}

module.exports = palindrome;
