/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let str = ''
    let helper_array = strs[0]
    let sum = 0
    let check = true

    for (let a = 0; a < strs[0].length; a++) {
        for (let b = 0; b < strs.length; b++) {
            if (helper_array[a] === strs[b][a]) {
                sum++
            }
            if (helper_array[a] != strs[b][a]) {
                check = false
            }
        }

        if (check === false) return str

        if (sum == strs.length) str += helper_array[a]

        sum = 0
    }

    return str
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]));