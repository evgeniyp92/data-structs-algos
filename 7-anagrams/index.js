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

	// early return if the string lengths dont match, they can't be anagrams
	if (parsedStringA.length !== parsedStringsB.length) return false

	// not relevant -- see above
	// figure out which string is the longer one
	// let longerString
	// let shorterString
	// if (parsedStringA.length > parsedStringsB.length) {
	// 	longerString = parsedStringA
	// 	shorterString = parsedStringsB
	// } else {
	// 	longerString = parsedStringsB
	// 	shorterString = parsedStringA
	// }

	// build charmap
	for (const element of parsedStringA) {
		if (seen[element]) {
			seen[element]++
		} else {
			seen[element] = 1
		}
	}
	// remove elements from charmap
	for (const element of parsedStringsB) {
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

// ------------------------------------------------------------------------------------------------------------------ //

function anagramsAlt(stringA, stringB) {
	// build character maps for both strings, removing special symbols and spaces as well
	const aCharMap = buildCharMap(stringA);
	const bCharMap = buildCharMap(stringB);

	// convert both charmaps into arrays of keys and check their length, mismatch = not an anagram
	const aKeys = Object.keys(aCharMap)
	const bKeys = Object.keys(bCharMap)
	if (aKeys.length !== bKeys.length) return false

	// iterate over one charmap and check if the value matches on the other one, if it doesnt match its not an anagram
	for (const char in aCharMap) {
		if (aCharMap[char] !== bCharMap[char]) return false
	}

	// all checks exhausted, return true
	return true
}

function buildCharMap(string) {
	const seen = {}
	// regex here is replacing []-character groups that are ^-not \w-words g-globally
	const cleanString = string.replace(/[^\w]g/, '').toLowerCase()
	for (const char of cleanString) {
		if (seen[char]) {
			seen[char]++
		} else {
			seen[char] = 1
		}
	}
	return seen
}

// ------------------------------------------------------------------------------------------------------------------ //

// this one has performance issues related to the sort taking up more time as the strings get bigger
function anagramsWithArrays(stringA, stringB) {
	const cleanStringA = cleanAndSortString(stringA)
	const cleanStringB = cleanAndSortString(stringB);
	for (let i = 0; i < cleanStringA.length; i++) {
		if (cleanStringA[i] !== cleanStringB[i]) return false
	}
	return true

	// alternative, because no concerns about referential equality
	cleanAndSortString(stringA) === cleanAndSortString(stringB)
}

function cleanAndSortString(string) {
	return string.replace(/[\^w]g/, '').toLowerCase().split('').sort().join()
}

module.exports = anagrams;
