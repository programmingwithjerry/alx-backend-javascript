#!/usr/bin/env node
/**
 * This script sets up a web server using Express that provides two routes:
 * - `/`: Responds with a welcome message.
 * - `/students`: Reads a CSV file, counts students by field, and responds with the results.
 * The server uses Promises for asynchronous file reading and exports the server object.
 */

const express = require('express'); // Import the Express module for creating the web server
const { readFile } = require('fs'); // Import the `readFile` function from the `fs` module to read files

const app = express(); // Create an Express application instance
const port = 1245; // Define the port number where the server will listen

/**
 * Reads a CSV file, processes student data, and returns a formatted string with the results.
 * @param {string} fileName - The path to the CSV file to process.
 * @returns {Promise<string>} A Promise that resolves with the formatted output or rejects with an error.
 */
function countStudents(fileName) {
  const students = {}; // Object to group student names by their field
  const fields = {}; // Object to count the number of students in each field
  let length = 0; // Counter for the total number of lines (students + header)

  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    readFile(fileName, (err, data) => {
      if (err) {
        // Reject the Promise if the file cannot be read
        reject(err);
      } else {
        let output = ''; // Initialize the output string

        // Split the file content into lines
        const lines = data.toString().split('\n');

        // Iterate through each line in the file
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) { // Skip empty lines
            length += 1; // Increment the line count
            const field = lines[i].toString().split(','); // Split the line into fields (comma-separated values)

            // Update the students object: group student names by their field
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }

            // Update the fields object: count the number of students in each field
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }

        const l = length - 1; // Subtract 1 to exclude the header line
        output += `Number of students: ${l}\n`; // Add the total student count to the output

        // Add the count and list of students for each field to the output
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') { // Skip the header field name
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }

        // Resolve the Promise with the formatted output
        resolve(output);
      }
    });
  });
}

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
  // Send a plain-text response for requests to the root URL
  res.send('Hello Holberton School!');
});

// Define a route for '/students' that processes and responds with student data
app.get('/students', (req, res) => {
  // Call the countStudents function and handle the Promise
  countStudents(process.argv[2].toString())
    .then((output) => {
      // On success, respond with the list of students
      res.send(['This is the list of our students', output].join('\n'));
    })
    .catch(() => {
      // On error, respond with a failure message
      res.send('This is the list of our students\nCannot load the database');
    });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Callback executed when the server starts successfully
  console.log(`Server is running on http://127.0.0.1:${port}/`);
});

// Export the server object for use in other modules
module.exports = app;
