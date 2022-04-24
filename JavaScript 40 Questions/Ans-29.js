// Given an array nums of distinct integers, return all the possible permutations. 
// You can return the answer in any order.

const arr = [1, 2, 3];
const findPermutations = (arr = []) => {
    let res = []
    const helper = (arr2) => {

        if (arr2.length == arr.length)
            return res.push(arr2)
        for (let e of arr)
            if (!arr2.includes(e))
                helper([...arr2, e])
    };

    helper([])
    return res;
};
console.log(findPermutations(arr));