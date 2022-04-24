// Write a JavaScript function that takes a string, and 
// returns the character that is most commonly used in the string.

var get_Max_String = function(str) {

    var max = 0,
        maxChar = '';

    str.split('').forEach(function(char) {

        if (str.split(char).length > max) {

            max = str.split(char).length;
            maxChar = char;
        }
    });

    return maxChar;
};

console.log(get_Max_String("IlovemyIndia"));