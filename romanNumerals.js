//  **************************************************************************
//  *                             How it works!                              *
//  **************************************************************************
//
//  Takes a string of roman numerals and converts them to an integer output.
//  First step is to ensure all characters are uppercase for formatting.
//  For each character in the string, aka the .length, an if/else statement will run.
//
//  Each loop will automatically increase the value of i by 1 by default.
//  i tracks which numeral is currently being processed, and can be modified to
//      skip or repeat processing a specific character.
//
//  Numerals stored in an object as key/value pairs.
//  If the numeral's value at the current index (i) is lower than that of the next index:
//        -It will minus the smaller value (current i) from the higher value (next i).
//        -Having found the value of the combination, it will add it to the total output.
//        -In cases like "IX", which is 1 and 10, the combination's value is 10 - 1 = 9.
//                                              "XLV" = (L - X ) + V = 50 - 10 + 5 = 45.
//                                    "XXIV" = X + X + (V - I) = 10 + 10 + (5 - 1) = 24.
//        -In this case, it will then also skip an index by adding +1 to i because it has
//          identified that two indexes are linked, and moves to the next chunk of numerals.
// 
//  Otherwise (else), it wil simply add the value of the current numeral to the output.
//
//  The If/Else statement will repeat for the length of the input.
//  It will then output the total value of the numerals in the string as an integer.


//  Numerals object that stores IVXLCDM as their key/value pairs.
//  For example, Numerals["V"] will return 5.

const Numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,  
}

//  Advanced JS note - Javascript will automatically check if roman numerals are higher or lower!
//  For example, "X" < "I" will return false. "I" < "X" will return true.
//
//  The if (i < i+1) statement can be written as:
//
//         if (input[i] < input[i+1]) {
//
//  for "XI", this will process as:
//         if ("X" < "I") {
//  JavaScript will automatically identify the roman numerals, giving false in this case.
//  In this example, it is not accessing the Numbers object.
// 
//  Example:
//          console.log("X" < "I") 
//          returns false
//
//  Using the object, we have direct control over the values of each numeral and what the
//      program is doing. Either will work though!


function romanToInt(input) {
    input = input.toUpperCase()
    let output = 0
    for (i=0; i<input.length; i++) {
        if (Numerals[input[i]] < Numerals[input[i+1]]) {
            output += Numerals[input[i+1]] - Numerals[input[i]]
            i++
        } else {
            output += Numerals[input[i]]     
        }
    }
    return output
}

// Example Inputs and their Outputs, stored in an array.

const testsArray = [
    "iV",        // returns 4
    "X",         // returns 10
    "xIV",       // returns 14
    "XvI",       // returns 16
    "IXVII",     // returns 16 (even though it's not a valid string of roman numerals, it will still calculate)
    "XXIV",      // returns 24
    "XcdM",      // returns 590
    "MmdCLXvI",  // returns 2666
    "MMMMCMXCIX" // returns 4999 (the highest value possible)
]

// forEach test in the testsArray, it will insert that test string and run the function.
// As the function is wrapped in a console.log string output, its return value will be output to console.
// A string is created using backticks (``) and ${} to include the return values in the logged string.

testsArray.forEach(test => {
    console.log(`Input: ${test}. Output: ${romanToInt(test)}`)
})