/*
    Link to leet code challenge:
    https://leetcode.com/problems/container-with-most-water/
*/

function maxArea(height) {
    let maximumNumber = 0;
    let leftIndex = 0;
    let rightIndex = height.length - 1;
    while (leftIndex !== rightIndex) {
        let horizontalAxis = rightIndex - leftIndex;
        const verticalAxis = Math.min(height[leftIndex], height[rightIndex]);
        const area = horizontalAxis * verticalAxis;
        maximumNumber = Math.max(area, maximumNumber);
        height[leftIndex] < height[rightIndex] ? leftIndex++ : rightIndex--;
    }
    return maximumNumber;
} 