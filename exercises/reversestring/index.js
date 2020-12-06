// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let rev_str = ""
    for(let i = str.length-1; i>=0;i--){
        rev_str+=str[i]
    }
    return rev_str
}
module.exports = reverse;
