// Write a JavaScript program that merges two sorted arrays.

function mergeSortedArrays(a, b) {
    for (var i = 0; i < b.length; i++) {
        a.push(b[i]);
    }

    for (i = 0; i < a.length; i++) {
        for (j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    return a;
}
console.log(mergeSortedArrays([1, 2, 3, 5, 9], [10, 4, 6, 7, 8]))