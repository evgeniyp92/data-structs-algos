// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	// set up charmap
	const seen = {}

	// parse the strings to remove anything that isn't letters and cast it to all lowercase
	const parsedStringA = stringA.replace(/[^\w]/g, "").toLowerCase()
	const parsedStringsB = stringB.replace(/[^\w]/g, "").toLowerCase()

	// figure out which string is the longer one
	let longerString
	let shorterString
	if (parsedStringA.length > parsedStringsB.length) {
		longerString = parsedStringA
		shorterString = parsedStringsB
	} else {
		longerString = parsedStringsB
		shorterString = parsedStringA
	}

	// build charmap
	for (const element of longerString) {
		if (seen[element]) {
			seen[element]++
		} else {
			seen[element] = 1
		}
	}
	// remove elements from charmap
	for (const element of shorterString) {
		if (seen[element]) {
			seen[element]--
		}
	}
	// return false if any value in seen is non-zero, indicating not an anagram
	for (const seenKey in seen) {
		if (seen[seenKey] !== 0) return false
	}
	return true
}

module.exports = anagrams;
