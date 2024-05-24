// GIVEN
const matrix = [
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0], // matrix[1][0]
  [0, 0, 1, 0, 0], // matrix[2][2]
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

// SOLUTION
function calculateStepsWithoutDiagonalMoves(mtx) {
  const coords = [];
  for (let i = 0; i < mtx.length; ++i) {
    for (let j = 0; j < mtx[i].length; ++j) {
      if (mtx[i][j] === 1) {
        coords.push([i, j]);
      }
    }
  }
  // coords === [[0, 1], [2, 2]]
  const horizontalDistance = Math.abs(coords[0][0] - coords[1][0]);
  const verticalDistance = Math.abs(coords[0][1] - coords[1][1]);
  return horizontalDistance + verticalDistance;
}

// REQUIREMENTS
describe("calculateStepsWithoutDiagonalMoves", () => {
  it("should calculate steps without diagonal moves between 2 points", () => {
    expect(calculateStepsWithoutDiagonalMoves(matrix)).toBe(3);
  });
});
