// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const new_str = str.trim()
    let len=str.length-1
    for(let i of str){
        if(i !== new_str[len]){
            return false
        }
        len--
    }
    return true
}

console.log(palindrome("aba"))

module.exports = palindrome;
