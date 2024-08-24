class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const charMap = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
    const stack = [];

    for (let i = 0; i < s.length; i++) {
      // Push
      if (charMap[s[i]]) {
        stack.push(s[i]);
        continue;
        // Pop
      } else {
        if (charMap[stack[stack.length - 1]] === s[i]) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return stack.length === 0;
  }
}
