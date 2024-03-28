// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = ['#']) {
    // base case: there are no more rows to generate
    if (n === row) {
        // finished working, return
        return;
    }

    // if n is equal to half-length of the level rounded up the level is done
    if (n === Math.round(level.length / 2)) {
        console.log(level.join(''))
        return pyramid(n, row + 1)
    }

    // the level is too short, push and unshift values to it
    if (level.length <= (row * 2) - 1) {
        level.push('#')
        level.unshift('#')
    } else {
        level.push(' ')
        level.unshift(' ')
    }
    return pyramid(n, row, level)
}

module.exports = pyramid;
