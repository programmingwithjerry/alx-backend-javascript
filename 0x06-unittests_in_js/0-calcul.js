// Define a function `calculateNumber` that takes two arguments, `a` and `b`
const calculateNumber = (a, b) => {
  // Round both numbers to the nearest integer and return their sum
  return Math.round(a) + Math.round(b);
};

// Export the `calculateNumber` function to make it available for use in other files
module.exports = calculateNumber;
