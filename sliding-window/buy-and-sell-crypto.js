class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let maxProfit = 0;
    let max,
      min = prices[0];

    for (let i = 0; i < prices.length; i++) {
      if (i !== prices.length - 1 && prices[i] <= min) {
        max = min = prices[i];
      } else if (prices[i] > max) {
        max = prices[i];
      }
      maxProfit = max - min > maxProfit ? max - min : maxProfit;
    }

    return maxProfit;
  }
}
