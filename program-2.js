function generateSeries(a) {
  const result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  return result;
}

// Example usage:
console.log(generateSeries(4)); // Output: [1, 3, 5, 7]

