function detectBombs(grid) {
  const neighborOffsets = [-1, 0, 1];

  return grid.map((row, rowIndex) =>
    row.map((_, colIndex) => {
      const adjacentBombsCount = neighborOffsets.reduce(
        (totalBombs, rowOffset) =>
          totalBombs +
          neighborOffsets.reduce((bombsInColumn, colOffset) => {
            const neighborRow = rowIndex + rowOffset;
            const neighborCol = colIndex + colOffset;
            const isBomb = grid[neighborRow]?.[neighborCol];
            return bombsInColumn + (isBomb ? 1 : 0);
          }, 0),
        0
      );

      return adjacentBombsCount - (grid[rowIndex][colIndex] ? 1 : 0);
    })
  );
}
