// Define the 'getPaymentTokenFromAPI' function, which simulates an API call
// The function takes a 'success' parameter to determine the behavior
const getPaymentTokenFromAPI = (success) => {
  // Return a new Promise, which handles asynchronous operations
  return new Promise((resolve, reject) => {
    // Check if the 'success' parameter is true
    if (success) {
      // If true, resolve the Promise with a mock successful response object
      resolve({ data: 'Successful response from the API' });
    }
    // If 'success' is false, the Promise remains unresolved as no reject is provided
  });
};

// Export the 'getPaymentTokenFromAPI' function for use in other modules
module.exports = getPaymentTokenFromAPI;
