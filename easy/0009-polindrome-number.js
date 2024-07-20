/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false

    let a = x.toString().split("").reverse().join("")

    return parseInt(a) === x
};