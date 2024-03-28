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

function stepsRecursion(n) {
    // base case

    // recursion case
}

module.exports = stepsAlternate;
