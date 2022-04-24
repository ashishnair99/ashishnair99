// Write a JavaScript program that checks leap year.

// Method First by using if...else.
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
// Take input by user.
const year = prompt('Enter a year:');
checkLeapYear(year)



// Method Second by using else...if.
var yr = 2004;
if ((yr % 4 == 0) && (yr % 100 != 0))
    console.log(yr + " is a Leap Year");
else if (yr % 400 == 0)
    console.log(yr + " is a Leap Year");
else
    console.log(yr + " is not a Leap Year");



// Third Method by using Logic.
function leapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapYear(2000));
console.log(leapYear(2005))