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
  reverseList(head, prev) {
    if (!head) {
      if (prev) {
        return prev;
      } else {
        return null;
      }
    }

    return this.reverseList(head.next, new ListNode(head.val, prev));
  }
}
