You can find the LeetCode link for this question [here](https://leetcode.com/problems/palindrome-number)

## Explanation:

Since All negative numbers are not palindrome ( -121 != 121- ), then the first step is to return false for all the negative numbers.
After that, we need to check digits to see whether they are equal to each other or not. For this purpose, we only need to check within 
the first index up to `floor` of half the number's length. To achieve this goal, we may need to find the middle of the number by using
`Math.floor(stringNumber.length / 2)` and since iteration starts from 0, we need to decrease that amount by 1.
In the while loop, we will check if the two items within this range are equal or not and then return the proper result.
