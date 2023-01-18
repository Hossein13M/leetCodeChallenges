/*
    Link to leet code challenge:
    https://leetcode.com/problems/palindrome-number
*/

function isPalindrome(number) {
    if (number < 0) return false;
    else {
        const stringNumber = `${number}`;
        let result = true;
        let index = 0;
        while (index <= Math.floor(stringNumber.length / 2) - 1) {
            if (stringNumber[index] !== stringNumber[stringNumber.length - index - 1]) {
                result = false;
            }
            index++;
        }
        return result;
    }
}
