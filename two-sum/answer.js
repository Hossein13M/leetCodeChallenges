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

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
