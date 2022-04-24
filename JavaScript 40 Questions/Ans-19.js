// Write a Javascript function that accepts an array of strings and returns the longest string.

var arr = ['aa', 'sss', 'dddddd', 'ffff', 'gggg'];

var lgth = 0;
var longest_String;

for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
        var lgth = arr[i].length;
        longest_String = arr[i];
    }
}

console.log(longest_String);