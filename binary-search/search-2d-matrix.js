class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    let l = 0;
    let r = matrix.length - 1;
    const matrixLength = matrix[0].length;

    while (l <= r) {
      const m = l + Math.floor((r - l) / 2);

      if (target > matrix[m][matrixLength - 1]) {
        l = m + 1;
      } else if (target < matrix[m][0]) {
        r = m - 1;
      } else {
        const index = this.binarySearch(matrix[m], target);

        if (index === -1) {
          break;
        }

        return true;
      }
    }

    return false;
  }
  binarySearch(array, target) {
    let l = 0;
    let r = array.length - 1;

    while (l <= r) {
      const m = l + Math.floor((r - l) / 2);

      if (target > array[m]) {
        l = m + 1;
      } else if (target < array[m]) {
        r = m - 1;
      } else {
        return m;
      }
    }

    return -1;
  }
}
