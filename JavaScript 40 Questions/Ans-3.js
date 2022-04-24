// Write a JavaScript function that accepts two integers and displays the larger.

var num1, num2;
num1 = window.prompt("Input the First integer");
num2 = window.prompt("Input the second integer");

if (parseInt(num1, 10) > parseInt(num2, 10)) {
    console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
} else
if (parseInt(num2, 10) > parseInt(num1, 10)) {
    console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
} else {
    console.log("The values " + num1 + " and " + num2 + " are equal.");
}