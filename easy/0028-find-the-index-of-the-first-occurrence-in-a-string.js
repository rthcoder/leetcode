/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const haysstack_length = haystack.length;
    const needle_length = needle.length;

    if (haysstack_length == needle_length) {
        return haystack == needle ? 0 : -1;
    }

    for (let i = 0; i <= haysstack_length - needle_length; i++) {
        let j;

        for (j = 0; j < needle_length; j++) {
            if (haystack[i + j] != needle[j]) {
                break;
            }
        }

        if (j == needle_length) return i;

    }

    return -1;
};
