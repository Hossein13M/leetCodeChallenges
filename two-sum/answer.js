/*
    Link to leet code challenge:
    https://leetcode.com/problems/two-sum
*/
function twoSum(nums, target) {
    let result = [];
    for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {
        for (let secondIndex = firstIndex + 1; secondIndex < nums.length; secondIndex++) {
            if (nums[firstIndex] + nums[secondIndex] === target) {
                result = result.length ? result : [firstIndex, secondIndex];
            }
        }
    }
    return result;
}
