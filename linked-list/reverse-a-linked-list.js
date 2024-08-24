/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    let result = null;
    let current = head;

    while (current) {
      result = new ListNode(current.val, result);

      current = current.next;
    }

    return result;
  }
}
