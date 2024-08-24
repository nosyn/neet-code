class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
      while (l < r && !this.alphaNum(s[l])) {
        l++;
      }
      while (r > l && !this.alphaNum(s[r])) {
        r--;
      }
      if (s[l].toLowerCase() !== s[r].toLowerCase()) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  }

  /**
   * @param {string} c
   * @return {boolean}
   */
  alphaNum(c) {
    const charCode = c.charCodeAt(0);
    return (
      (65 <= charCode && charCode <= 90) ||
      (97 <= charCode && charCode <= 122) ||
      (48 <= charCode && charCode <= 57)
    );
  }
}
