// Import the 'Utils' module, which contains utility functions such as 'calculateNumber'
const Utils = require('./utils');

// Define the 'sendPaymentRequestToApi' function that calculates and logs the total payment
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  // Use the 'calculateNumber' function from 'Utils' to compute the sum of totalAmount and totalShipping
  // The 'SUM' operation type is passed to perform addition
  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  // Log the calculated total payment to the console in a formatted message
  console.log(`The total is: ${sum}`);
};

// Export the 'sendPaymentRequestToApi' function to make it available for use in other parts of the application
module.exports = sendPaymentRequestToApi;
