// SOLUTION
function findMissingNumber(givenArray) {
  const expectedArray = Array(givenArray.length + 1)
    .fill()
    .map((_, i) => i + 1); // [1, 2, 3, 4, 5]
  const expectedArrayNumbersSum = expectedArray.reduce((a, b) => a + b, 0); // 15
  const givenArrayNumbersSum = givenArray.reduce((a, b) => a + b, 0); // 1 + 2 + 3 + 5 = 11
  return expectedArrayNumbersSum - givenArrayNumbersSum; // 15 - 11 = 4
}

// REQUIREMENTS
describe("findMissingNumber", () => {
  it("should return missing number from an array which should contain consecutive numbers, e.g. [1, 2, 3, 4, 5] but '4' is missing, so [1, 2, 3, 5]", () => {
    // GIVEN
    const array = [1, 2, 3, 5];

    const missingNumber = findMissingNumber(array);
    expect(missingNumber).toBe(4);
  });
});
