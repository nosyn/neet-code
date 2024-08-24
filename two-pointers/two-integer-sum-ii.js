class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
      const sum = numbers[l] + numbers[r];

      if (sum > target) {
        r--;
      } else if (sum < target) {
        l++;
      } else {
        return [l + 1, r + 1];
      }
    }

    return [];
  }
}
