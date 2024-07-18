/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const result_arr = []

    for (let i = 0; i <= nums.length; i++) {
        const new_target = target - nums[i]

        for (let j = i + 1; j <= nums.length; j++) {

            const num = nums[j]

            if (num === new_target) {
                return [i, j]
            }

        }
    }
    return false
};