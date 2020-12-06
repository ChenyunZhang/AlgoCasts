// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// note pseudocode
// if the number is negative, make it a postive number
// check if int%10 = 0, if yes, return the number, 
// if not, int/10

function reverseInt(n) {
    let reverse = 0
    let positive_n = n > 0 ? n : -n
    while( Math.floor(positive_n) > 0){
        let temp= positive_n%10
        positive_n = Math.floor(positive_n/10)
        reverse = reverse * 10 + temp
    }
    return n>=0 ? reverse : reverse*-1
}

console.log(reverseInt(0))

module.exports = reverseInt;
