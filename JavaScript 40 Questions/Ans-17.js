// JavaScript Square Star Pattern.

let n = 5;
let string = "";

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        string += "*";
    }
    // newline after each row
    string += "\n";
}
// Print String.
console.log(string);