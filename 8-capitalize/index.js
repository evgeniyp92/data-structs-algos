// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Own Solution - Best per instructor
function capitalize(str) {
    const capitalized = []
    const words = str.split(' ');
    for (const word of words) {
        capitalized.push(word[0].toUpperCase() + word.slice(1))
    }
    return capitalized.join(' ')
}

// Alternate solution - weak to i18n problems
function capitalizeAlternate(str) {
    let result = []
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i - 1] === ' ') {
            result.push(str[i].toUpperCase())
        } else {
            result.push(str[i])
        }
    }
    return result.join('')
}

module.exports = capitalizeAlternate;
