/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @param {TreeNode} subRoot
   * @return {boolean}
   */
  isSubtree(root, subRoot) {
    if (!subRoot) {
      return true;
    }

    if (!root) {
      return false;
    }

    return (
      this.isSameTree(root, subRoot) || // If the current node of a root is the same as the subRoot
      this.isSubtree(root.left, subRoot) || // Otherwise, move to the left node of the root
      this.isSubtree(root.right, subRoot) // Or move to the right node of the root
    );
  }

  isSameTree(p, q) {
    if (!p && !q) {
      return true;
    }

    if (p && q && p.val === q.val) {
      return (
        this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
      );
    } else {
      return false;
    }
  }
}
