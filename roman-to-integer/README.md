You can find the LeetCode link for this question [here](https://leetcode.com/problems/roman-to-integer)

## Explanation:

We create a mapper object to find the proper value for each roman indicator. Since the Roman numbers are written from the
biggest to the smallest then there is two things to do:

- We need To the value to our `finalResult` if it is bigger than the next item in the array. for example in the case of 
`XV` we need to add the value of `X` into our `finalResult`
- We need to decrease the amount if its is smaller than the next item. For example `IV` since `I` is smaller than `V`,
then we need to decrease our finalResult by 1 which is the value of `I`
- For the last item in the array, we only need to add its value to the `finalResult`
