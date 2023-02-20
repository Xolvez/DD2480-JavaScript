/*
Conway's Game of Life
The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
  1. Any live cell with two or three live neighbours survives.
  2. Any dead cell with three live neighbours becomes a live cell.
  3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.
(description adapted from https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life )
(example adapted from https://github.com/TheAlgorithms/Python/blob/master/cellular_automata/conways_game_of_life.py )
*/

/**
 * Generates the next generation for a given state of Conway's Game of Life.
 */
export function newGeneration (cells, __COVERAGE__) {
  const nextGeneration = []
  for (let i = 0; i < cells.length; i++) {
    __COVERAGE__[0] = true;
    const nextGenerationRow = []
    for (let j = 0; j < cells[i].length; j++) {
      __COVERAGE__[2] = true;
      // Get the number of living neighbours
      let neighbourCount = 0
      if (i > 0 && j > 0) {
        __COVERAGE__[4] = true;
        neighbourCount += cells[i - 1][j - 1]
      }
      else __COVERAGE__[5] = true

      if (i > 0) {
        __COVERAGE__[6] = true;
        neighbourCount += cells[i - 1][j]
      }
      else __COVERAGE__[7] = true;
      
      if (i > 0 && j < cells[i].length - 1) {
        __COVERAGE__[8] = true;
        neighbourCount += cells[i - 1][j + 1]
      }
      else __COVERAGE__[9] = true;

      if (j > 0) {
        __COVERAGE__[10] = true;
        neighbourCount += cells[i][j - 1]
      }
      else __COVERAGE__[11] = true;

      if (j < cells[i].length - 1) {
        __COVERAGE__[12] = true;
        neighbourCount += cells[i][j + 1]
      }
      else __COVERAGE__[13] = true;

      if (i < cells.length - 1 && j > 0) {
        __COVERAGE__[14] = true;
        neighbourCount += cells[i + 1][j - 1]
      }
      else __COVERAGE__[15] = true;

      if (i < cells.length - 1) {
        __COVERAGE__[16] = true;
        neighbourCount += cells[i + 1][j]
      }
      else __COVERAGE__[17] = true;

      if (i < cells.length - 1 && j < cells[i].length - 1) {
        __COVERAGE__[18] = true;
        neighbourCount += cells[i + 1][j + 1]
      }
      else __COVERAGE__[19] = true;

      // Decide whether the cell is alive or dead
      const alive = cells[i][j] === 1
      if ((alive && neighbourCount >= 2 && neighbourCount <= 3) || (!alive && neighbourCount === 3)) {
        __COVERAGE__[20] = true;
        nextGenerationRow.push(1)
      } else {
        __COVERAGE__[21] = true;
        nextGenerationRow.push(0)
      }
    }
    __COVERAGE__[3] = true;
    nextGeneration.push(nextGenerationRow)
  }
  __COVERAGE__[1] = true;
  return nextGeneration
}
