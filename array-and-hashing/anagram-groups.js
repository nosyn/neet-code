// Leetcode 49
class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const sortedObj = {};
    for (const s of strs) {
      const splitedStr = s.split("");
      const sortedStr = splitedStr.sort().join("");

      if (!sortedObj[sortedStr]) {
        sortedObj[sortedStr] = [];
      }

      sortedObj[sortedStr].push(s);
    }

    return Object.values(sortedObj);
  }
}
