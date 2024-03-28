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

module.exports = pyramidRecursive;

function pyramidWithLoop(n) {
    // calculate the midpoint of the row -- midpoint can also just be n-1
    const midpoint = Math.floor((2 * n - 1) / 2)
    // iterate over rows
    for (let row = 0; row < n; row++) {
        // set up an empty string
        let level = ''
        // iterate over columns of a row
        for (let column = 0; column < 2 * n - 1; column++) {
            // check if we're in bounds of where we should be printing
            // so for row 0 its only at the center
            // for row 1 its one away from the center
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#'
            } else {
                level += ' '
            }
        }
        console.log(level)
    }
}

function pyramidRecursive(n, row = 0, level = '') {
    if (n === row) return;

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1)
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    // this works because we're iterating left-to-right over the level and checking if we're 'in-bounds' of where we
    // should be printing #'s. so for the first level, the first two times it actually returns empty string and only
    // then adds
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }

    return pyramidRecursive(n, row, level + add)
}

pyramidRecursive(4)