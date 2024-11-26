#!/usr/bin/env node
/**
 * This script prompts the user for their name, reads input from the standard input (stdin),
 * and then prints the user's name to the standard output (stdout).
 * If stdin is not a TTY (terminal), it still processes input and handles the program exit gracefully.
 */

// Prompt the user with a welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Check if stdin is connected to a TTY (interactive terminal)
if (process.stdin.isTTY) {
  // If stdin is a TTY, set up a listener for 'data' events
  process.stdin.on('data', (data) => {
    // Convert the input data to a string and print the user's name
    process.stdout.write(`Your name is: ${data.toString()}`);
    // Exit the process
    process.exit();
  });
} else {
  // If stdin is not a TTY, set up a listener for 'data' events
  process.stdin.on('data', (data) => {
    // Convert the input data to a string and print the user's name
    process.stdout.write(`Your name is: ${data.toString()}`);
    // Exit the process
    process.exit();
  });

  // Set up a listener for the 'exit' event
  process.on('exit', () => {
    // Print a message when the program is closing
    process.stdout.write('This important software is now closing\n');
  });
}
