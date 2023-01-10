/*
    Link to leet code challenge:
    https://leetcode.com/problems/backspace-string-compare
*/

// Solution 1:
function backspaceCompare(s, t) {
    const finalS = [];
    const finalT = [];

    for (let index = 0; index < s.split('').length; index++) {
        s.split('')[index] === '#' ? finalS.pop() : finalS.push(s.split('')[index]);
    }

    for (let index = 0; index < t.split('').length; index++) {
        t.split('')[index] === '#' ? finalT.pop() : finalT.push(t.split('')[index]);
    }

    return finalS.join('') === finalT.join('');
}

// Solution 2:
function backspaceCompare2(s, t) {
    let i = s.length - 1;
    let j = t.length - 1;
    let sSkipCount = 0;
    let tSkipCount = 0;

    while (i >= 0 || j >= 0) {
        if (s[i] === '#') {
            sSkipCount++;
            i--;
        } else if (sSkipCount > 0 && i >= 0) {
            sSkipCount--;
            i--;
        } else if (t[j] === '#') {
            tSkipCount++;
            j--;
        } else if (tSkipCount > 0 && j >= 0) {
            tSkipCount--;
            j--;
        } else if (s[i] !== t[j]) {
            return false;
        } else {
            i--;
            j--;
        }
    }
    return true;
}
