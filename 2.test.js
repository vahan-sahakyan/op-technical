// GIVEN
const INITIAL_X_VALUE = 3;
const INITIAL_Y_VALUE = 5;

let x = INITIAL_X_VALUE;
let y = INITIAL_Y_VALUE;

// SOLUTION
y = y + x;
x = y - x;
y = y - x;

// REQUIREMENTS
describe("variable 'x'", () => {
  it("should be equal to 'y' initial value", () => {
    expect(x).toBe(INITIAL_Y_VALUE);
  });
});

describe("variable 'y'", () => {
  it("should be equal to 'x' initial value", () => {
    expect(y).toBe(INITIAL_X_VALUE);
  });
});
