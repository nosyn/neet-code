class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const output = [];

    for (let i = 0; i < nums.length; i++) {
      const product = nums.reduce((acc, number, currentIndex) => {
        if (currentIndex === i) {
          return acc;
        }

        return acc * number;
      }, 1);

      output.push(product);
    }

    return output;
  }
}
