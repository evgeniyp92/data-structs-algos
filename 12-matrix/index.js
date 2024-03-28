// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // always be visualizing the data structure and coming up with plans of attack on a whiteboard or something!

    // for this you need counters that monitor what row and column we're working on

    // create a counter to track what value we should be inserting
    let counter = 0
    // create a results array
    const results = []
    // make results 2-dimensional
    for (let i = 0; i < n; i++) {
        results.push([])
    }

    // set up counters to track bounds
    let startColumn = 0
    let startRow = 0
    let endColumn = n - 1
    let endRow = n - 1

    // keep looping until we converge on the center
    while(startColumn <= endColumn && startRow <= endRow) {
        // move left to right in the first row, setting the value to be counter
        for (let i = startColumn; i <= endColumn; i++) {
            // access subarray of startRow at the position of i
            results[startRow][i] = ++counter;
        }
        // shift the start inward
        startRow++
        // move up to down in the rightmost column, setting value to counter
        for (let i = startRow; i <= endRow; i++) {
            // access subarray i in results at the position of endColumn
            results[i][endColumn] = ++counter;
        }
        // move the endColumn inward
        endColumn--
        // same as first for loop but reversed, start from the right and go left
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = ++counter
        }
        // move the endRow inward
        endRow--
        // same as second loop but reversed, move down to up
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = ++counter
        }
        // move the startColumn inward
        startColumn++
        // while loop, so repeat until converged
    }
    return results
}

module.exports = matrix;
