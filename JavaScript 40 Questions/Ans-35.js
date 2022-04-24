// Given a string s and a dictionary of strings wordDict, 
// return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Word-Break JavaScript Problem
var wordBreak = function(s, wordDict) {
    if (!wordDict || wordDict.length === 0)
        return false;

    while (s.length > 0) {
        let test = wordDict.some((word) => {
            if (s.indexOf(word) === 0) {
                s_new = s.substr(word.length);
                return wordBreak(s_new, wordDict);
            }
        });
        if (!test)
            return false;
        s = s_new;
    }
    if (s.length === 0)
        return true;
}

// Driver Code.
s = "leetcode";
wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict)); // true

s = "applepenapple";
wordDict = ["apple", "pen"];
console.log(wordBreak(s, wordDict)); //true

s = "catsandog";
wordDict = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s, wordDict)); //false