function countMultiples(arr) {
<<<<<<< HEAD
    const result = {};
    for (let i = 1; i <= 9; i++) {
      result[i] = arr.filter(num => num % i === 0).length;
    }
    return result;
  }
  
  // Example usage:
  const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
  console.log(countMultiples(input));
  
=======
  const result = {};
  for (let i = 1; i <= 9; i++) {
    result[i] = arr.filter(num => num % i === 0).length;
  }
  return result;
}

// Example usage:
const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log(countMultiples(input));

>>>>>>> ff2c726d1ce17364fed226460997a272d16506f9
