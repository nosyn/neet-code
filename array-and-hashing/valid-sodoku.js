class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rows = new Map();
    const cols = new Map();
    const subBoards = new Map();

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const cell = board[r][c];
        const subBoardKey = Math.floor(r / 3) * 3 + Math.floor(c / 3);

        if (cell === ".") {
          continue;
        }

        if (
          rows.get(r)?.has(cell) ||
          cols.get(c)?.has(cell) ||
          subBoards.get(subBoardKey)?.has(cell)
        ) {
          return false;
        }

        rows.set(r, new Set(rows.get(r)).add(cell));
        cols.set(c, new Set(cols.get(c)).add(cell));
        subBoards.set(
          subBoardKey,
          new Set(subBoards.get(subBoardKey)).add(cell),
        );
      }
    }

    return true;
  }
}
