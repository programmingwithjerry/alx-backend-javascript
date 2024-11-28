// Define a function `calculateNumber` that takes three arguments:
// `type` (the operation to perform), `a` (first number), and `b` (second number)
const calculateNumber = (type, a, b) => {
  // Round both input numbers to the nearest integer
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Perform the operation based on the `type` argument
  if (type === 'SUM') {
      // If the operation is 'SUM', return the sum of the two rounded numbers
      return roundedA + roundedB;
  }

  if (type === 'SUBTRACT') {
      // If the operation is 'SUBTRACT', return the difference between the two rounded numbers
      return roundedA - roundedB;
  }

  if (type === 'DIVIDE') {
      // If the operation is 'DIVIDE', check if the second number is 0 to avoid division by zero
      if (roundedB === 0) {
          // Return an error message if division by zero is attempted
          return 'Error';
      }
      // Otherwise, return the result of dividing the two rounded numbers
      return roundedA / roundedB;
  }
}

// Export the `calculateNumber` function to make it available for use in other files
module.exports = calculateNumber;
