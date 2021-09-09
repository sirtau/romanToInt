let input = "IVX"
const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,  
}


function romanToInt(input) {
    let output = 0
    for (i=0; i<input.length; i++) {
        if (input[i] < input[i+1]) {
             output += numerals[input[i+1]] - numerals[input[i]]
            i++
        } else {
            output += numerals[input[i]]     
        }
    }
    return output
}


console.log(romanToInt(input))