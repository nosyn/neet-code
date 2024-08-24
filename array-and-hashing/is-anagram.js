// Leetcode 242. Valid Anagram
class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }
    const strArr = s.split("");

    for (let i = 0; i < t.length; i++) {
      const foundIndex = strArr.indexOf(t[i]);

      if (foundIndex === -1) {
        return false;
      }
      strArr.splice(foundIndex, 1);
    }

    return true;
  }
}
