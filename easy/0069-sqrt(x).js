/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let begin = 0;
    let end = x
    let result = 0;

    while (begin <= end) {
        let middle = Math.floor((begin + end) / 2);
        console.log(middle, 'middle');

        if (middle * middle > x) {
            end = middle - 1;
        }

        else {
            result = middle;
            begin = middle + 1;
        }
    }
    return result + 'result';
};