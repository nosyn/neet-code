class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    let l = 1;
    let r = Math.max(...piles);

    while (l <= r) {
      const m = Math.floor((r + l) / 2);

      let totalHours = 0;
      for (const p of piles) {
        totalHours += Math.ceil(p / m);
      }

      if (totalHours <= h) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }

    return l;
  }
}
