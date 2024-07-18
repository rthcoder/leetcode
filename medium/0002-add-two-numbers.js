/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    let num_1 = ""
    let num_2 = ''

    let first = l1.reverse().map((el) => num_1 += el)
    let second = l2.reverse().map((el) => num_2 += el)

    let result = parseInt(num_1) + parseInt(num_2)

    return result.toString().split('').reverse()
};

console.log((addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])));