class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = []; // Pair: [temp, index]

    for (let i = 0; i < temperatures.length; i++) {
      const t = temperatures[i];

      while (stack.length > 0 && t > stack[stack.length - 1][0]) {
        const [_, stackIndex] = stack.pop();
        result[stackIndex] = i - stackIndex;
      }

      stack.push([t, i]);
    }

    return result;
  }
}
