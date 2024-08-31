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
   * @return {number}
   */
  goodNodes(root) {
    return this.dfs(root, root.val);
  }

  dfs(root, maxVal) {
    if (!root) {
      return 0;
    }

    const res = root.val >= maxVal ? 1 : 0;

    const newMax = Math.max(maxVal, root.val);

    return res + this.dfs(root.left, newMax) + this.dfs(root.right, newMax);
  }
}
