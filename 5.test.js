// GIVEN
let x = 542;
let sumOfDigits = 0;

// SOLUTION
while (x > 0) {
  sumOfDigits += x % 10;
  x = parseInt(x / 10);
}

// REQUIREMENTS
describe("sumOfDigits of 'x'", () => {
  it("should be equal to 5 + 4 + 2", () => {
    expect(sumOfDigits).toBe(5 + 4 + 2); // 11
  });
});
