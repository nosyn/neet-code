// Leetcode 128
class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longestSeq = 0;

    for (const n of numSet) {
      if (!numSet.has(n - 1)) {
        let length = 1;
        while (numSet.has(n + length)) {
          length++;
        }

        longestSeq = Math.max(length, longestSeq);
      }
    }

    return longestSeq;
  }
}
