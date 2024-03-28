// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Own solution
function steps(n) {
    for (let i = 1; i <= n; i++) {
        const hashes = i;
        const spaces = n - i
        let string = ''
        for (let j = 1; j <= hashes; j++) {
            string += '#'
        }
        for (let k = 1; k <= spaces; k++) {
            string += ' '
        }
        console.log(string)
    }
}

// Own solution with less space complexity
function stepsMoreElegant(n) {
    for (let i = 1; i <= n; i++) {
        let string = ''
        for (let j = 1; j <= i; j++) {
            string += '#'
        }
        for (let k = 1; k <= n - i; k++) {
            string += ' '
        }
        console.log(string)
    }
}

function stepsAlternate(n) {
    // this is essentially a two-dimensional array
    for (let row = 1; row <= n; row++) {
        let string = '';
        for (let column = 1; column <= n; column++) {
            if (column <= row) {
                string += '#'
            } else {
                string += ' '
            }
        }
        console.log(string)
    }
}

function stepsRecursion(n, row = 0) {
    // base case
    // if row === n we have hit the end
    // is stair has a length of n we are at the end of the row
    // if length of stair is less than or equal to row number worked on, add # otherwise ' ';
    if (n === row) {
        return;
    }
    // work
    let stair = ''
    for (let i = 0; i <= n; i++) {
        if (stair.length <= row) {
            stair += '#'
        } else {
            stair += ' '
        }
    }
    console.log(stair)
    // recurse
    return stepsRecursion(n, row + 1)
}

stepsRecursion(4)

function stepsMoreRecursion(n, row = 0, stair = '') {
    // base case: we're at the end of the steps
    if (n === row) {
        return;
    }

    // if the length of the stair is n, the stair is done, recurse with a new row and an empty stair
    if (n === stair.length) {
        console.log(stair)
        return stepsMoreRecursion(n, row + 1)
    }

    // the stair is too short, so look where we are and append the necessary character. then call the func
    // recursively with the working stair and row
    if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }
    return stepsMoreRecursion(n, row, stair)
}

// recursion refresher
function printNumber(n) {
    // always identify a base case
    if (n === 0) return;
    // do work
    console.log(n)
    // call the function again
    return printNumber(n - 1)
}

printNumber(10)

module.exports = stepsAlternate;
