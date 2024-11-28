// Import the 'Utils' module, which contains utility functions like calculateNumber
const Utils = require('./utils');

// Define a function `sendPaymentRequestToApi` that takes two parameters:
// `totalAmount` (the total amount to be paid) and `totalShipping` (the shipping cost)
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  // Use the 'calculateNumber' function from the 'Utils' module to calculate the sum of the total amount and shipping cost
  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  // Log the result to the console in a formatted message
  console.log(`The total is: ${sum}`);
};

// Export the `sendPaymentRequestToApi` function to make it available for use in other files
module.exports = sendPaymentRequestToApi;
