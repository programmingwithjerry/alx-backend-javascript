#!/usr/bin/env node
/**
 * This script defines a function `displayMessage` that prints a given string
 * to standard output (STDOUT) and exports the function for external use.
 */

/**
 * Prints the given message to the standard output.
 * @param {string} message - The message to print.
 */
function displayMessage(message) {
  console.log(message);
}

// Export the function to make it available for external use
module.exports = displayMessage;
