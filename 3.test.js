// GIVEN
const notFullStr = "DqyiUooPbn";
const fullStr = "QwErTyUiOpAsDfGhJkLzXcVbNm";

// SOLUTION
function isFull(str) {
  const unique = [...new Set(str.toLowerCase().split(""))];
  return unique.length === 26;
}

// REQUIREMENTS
describe("isFull", () => {
  it("should return false if the string does not contain all alphabet characters", () => {
    expect(isFull(notFullStr)).toBe(false);
  });
  it("should return true if the string contains all alphabet characters", () => {
    expect(isFull(fullStr)).toBe(true);
  });
});
