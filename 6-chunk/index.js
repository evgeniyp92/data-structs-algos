// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	let newArray = [];
	let subArray = [];
	if (array.length <= size) { return [array] }
	for (let index = 0; index < array.length; index++) {
		if (array[index] % size !== 0) {
			subArray.push(array[index])
		}
		if (array[index] % size === 0) {
			subArray.push(array[index])
			newArray.push(subArray)
			subArray = [];
		}
		if (array.length - 1 === index && subArray.length > 0) {
			newArray.push(subArray)
		}
	}
	return newArray
}

function chunkAlternate(array, size) {
	// create empty array to hold chunks called chunked
	const chunked = []
	// for each element in the original array
	for (const arrayElement of array) {
		// retrieve the last element in chunked
		const last = chunked[chunked.length - 1]
		// if there are no chunks in chunked, or if the length of the retrieved chunk is already equal to chunk size
		if(!last || last.length === size) {
			// push a new chunk into chunked with the current element included
			chunked.push([arrayElement])
		} else {
			// else add the current element into the last chunk inside chunked
			last.push(arrayElement)
		}
	}
	return chunked
}

function chunkSlicing(array, size) {
	// array of chunks
	const chunked = [];
	// pointer
	let index = 0;

	// as long as pointer is inbounds
	while (index < array.length) {
		// make a slice of array starting at pointer going to size
		const slice = array.slice(index, index + size)
		// push it to chunked
		chunked.push(slice)
		// move the pointer
		index += size
	}

	return chunked
}

function chunkSlicingRecursive(array, size) {
	// base case
	if (array.length <= size) {
		return [array]
	}
	// return a new array containing a slice from nominal 0 to size, then concat onto it the result of calling the
	// function recursively, wherein the array arg is the already sliced array beginning at size, going further to size
	return [array.slice(0, size)].concat
	(chunkSlicingRecursive(array.slice(size), size))
}

console.log(chunkSlicingRecursive([1,2,3,4,5], 2))

module.exports = chunk;