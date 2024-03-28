// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    // O(2^n) complexity, 500-600ms to run fib(15)
    // it doesnt exactly double, but it is a dramatic increase in function calls to calculate a value
    // never do recursion unless you're specifically asked
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
    // this works because the returned function calls always work down to fib(0) or fib(1)
    // so at the base level we just add zeroes and ones, and we work our way back up with bigger and bigger numbers
    // until we get to the top and the result is known
}

function fibIterative(n) {
    // O(n) time complexity, <1ms to run fib(15)
    const fibArray = [0,1]
    for (let i = 2; i <= n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2])
    }
    return fibArray[n]
}

module.exports = fib;