// Create a Loop in JavaScript that prints all numbers from 0 to 9.

for (var input = 1; input <= 10; input++) {
    console.log(input);
}
console.log(" ");

// By using Spread Operator or Arrow Function.
[...Array(10)].forEach((e, i) => console.log(++i));