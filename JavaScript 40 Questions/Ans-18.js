// JavaScript Left Triangle Star Pattern.

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        string += "*";
    }
    // newline after each row
    string += "\n";
}
// Print String
console.log(string);