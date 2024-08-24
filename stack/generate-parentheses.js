class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    const result = [];

    function backtrack(path, open, close) {
      if (open === n && close === n) {
        result.push(path);
      }

      if (open < n) {
        backtrack(path.concat("("), open + 1, close);
      }

      if (close < open) {
        backtrack(path.concat(")"), open, close + 1);
      }
    }

    backtrack("", 0, 0);

    return result;
  }
}
