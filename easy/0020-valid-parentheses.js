/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        }

        if (s[i] === ')') {
            if (stack[stack.length - 1] !== '(') return false;
            else stack.pop()
        }

        if (s[i] === ']') {
            if (stack[stack.length - 1] !== '[') return false;
            else stack.pop();
        }

        if (s[i] === '}') {
            if (stack[stack.length - 1] !== '{') return false;
            else stack.pop();
        }
    }

    return stack.length === 0;

};