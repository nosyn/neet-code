class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    if (nums.length === 0) {
      return [];
    }

    const count = {};
    const topFreqMap = new Map();
    const topK = [];

    for (const n of nums) {
      count[n] = (count[n] || 0) + 1;
    }

    for (const num in count) {
      const freq = count[num];
      const existingVal = topFreqMap.get(freq);

      if (!existingVal) {
        topFreqMap.set(freq, [num]);
      } else {
        topFreqMap.set(freq, [...existingVal, num]);
      }
    }

    // Note: Because frequent of each num in the nums can not be greater than nums.length
    // We can loop the nums.length backward to get the topK
    for (let i = nums.length; i > 0; i--) {
      if (topK.length >= k) {
        return topK;
      } else {
        const values = topFreqMap.get(i);
        if (values) {
          topK.push(...values);
        }
      }
    }

    return topK;
  }
}
