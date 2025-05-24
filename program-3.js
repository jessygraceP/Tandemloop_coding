function generateOddSeries(a) {
  const count = a % 2 === 0 ? a - 1 : a;
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(2 * i + 1);
  }
  return result;
}

// Example usage:
console.log(generateOddSeries(6)); // Output: [1, 3, 5, 7, 9]

