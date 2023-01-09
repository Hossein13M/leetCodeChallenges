You can find the LeetCode link for this question [here](https://leetcode.com/problems/container-with-most-water)

## Explanation:

Look at this problem as you want to calculate the maximum area between two vertical axis.
In order to have an optimized solution, we are going to use only one loop and change the index from the beginning and the end simultaneously.
We declare a max variable and then update its value after checking the area between the two selected number. 
The area is the multiply of the `horizontal axis` and `vertical axis`. The vertical axis is the `height[index]` and the horizontal axis is the `index` itself.