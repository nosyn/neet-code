// Time complexity: O(n)
// Space: O(n)
//
class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    let maxHeightFromTheLeft = 0;
    let leftVol = new Array(height.length).fill(0);

    for (let l = 0; l < height.length; l++) {
      if (height[l] > maxHeightFromTheLeft) {
        maxHeightFromTheLeft = height[l];
      }

      leftVol[l] = Math.max(0, maxHeightFromTheLeft - height[l]);
    }

    let maxHeightFromTheRight = 0;
    let rightVol = new Array(height.length).fill(0);

    for (let r = height.length - 1; r > 0; r--) {
      if (height[r] > maxHeightFromTheRight) {
        maxHeightFromTheRight = height[r];
      }

      rightVol[r] = Math.max(0, maxHeightFromTheRight - height[r]);
    }

    let vol = 0;
    for (let i = 0; i < height.length; i++) {
      vol += Math.min(leftVol[i], rightVol[i]);
    }

    return vol;
  }
}
