// Define a function `calculateNumber` that takes three arguments:
// `type` (the operation to perform), `a` (first number), and `b` (second number)
const calculateNumber = (type, a, b) => {
  // Round both input numbers to the nearest integer
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Check if the operation type is 'SUM' (addition)
  if (type === 'SUM') {
      // Return the sum of the two rounded numbers
      return roundedA + roundedB;
  }

  // Check if the operation type is 'SUBTRACT' (subtraction)
  if (type === 'SUBTRACT') {
      // Return the difference between the two rounded numbers
      return roundedA - roundedB;
  }

  // Check if the operation type is 'DIVIDE' (division)
  if (type === 'DIVIDE') {
      // If the second number (roundedB) is 0, return an error message to avoid division by zero
      if (roundedB === 0) {
          return 'Error';
      }
      // Otherwise, return the result of dividing the two rounded numbers
      return roundedA / roundedB;
  }
}

// Export the `calculateNumber` function to make it available for use in other modules
module.exports = calculateNumber;
