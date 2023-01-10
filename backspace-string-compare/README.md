You can find the LeetCode link for this question [here](https://leetcode.com/problems/backspace-string-compare)

## Explanation:

### Solution 1:

We need to `split` each string into two arrays and then iterate in them and check if the item is equal to `#` or not. If the item is **_not_** `#`,
then it is safe to push it into the array, otherwise, we need to remove the last element we have pushed into the array.
It is because that if the item is `#`, then the last element should be removed.

Finally, we need to join the array elements together and check their equality.

### Solution 2: (Optimized Memory Usage)
We use two pointers. In this solution, we will iterate from the last item of the string to the first one.
By using two pointers, we need to check if it is `#` or not and then increment the `skipCount` for each string
and then check whether the two strings are equal at the same index or not. Finally, if nothing happens we will return `true`

#### For more information you can read an article from _Alisa Bajramovic_ [here](https://dev.to/alisabaj/the-backspace-string-compare-algorithm-3ioo)

