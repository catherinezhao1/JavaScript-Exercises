/*
    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.

    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

function sumTwoSmallestNumbers(nums) {
    sort_nums = nums.sort((a, b) => a - b)
    for (let i=0; i<sort_nums.length; i++){
        if (sort_nums[0]<0){sort_nums = sort_nums.slice(1,sort_nums.length)}
    }
    smallest_sum = sort_nums[0] + sort_nums[1]
    return smallest_sum
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.sumTwoSmallestNumbers = sumTwoSmallestNumbers