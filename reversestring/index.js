// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    /**
     * 1 solution
     * */
    //return str.split('').reverse().join('');

    /**
     * 2 solution
     * */
    // let reversed = '';
    //
    // for (let char of str) {
    //     reversed = char + reversed;
    // }
    // return reversed;

    /**
     * 3 solution
     * */
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
