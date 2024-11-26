#!/usr/bin/env node
/**
 * This script sets up an HTTP server that handles two routes:
 * - `/`: Responds with a welcome message.
 * - `/students`: Reads a CSV file, counts students by field, and responds with the result.
 * The server uses Promises to handle asynchronous file reading and exports the server object.
 */

const http = require('http'); // Import the HTTP module to create a web server
const { readFile } = require('fs'); // Import the `readFile` function from the `fs` module to read files

// Define the hostname and port where the server will listen
const hostname = '127.0.0.1'; // Localhost IP address
const port = 1245;            // Port number for the server

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

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the HTTP response status code and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    // Handle the root route
    res.write('Hello Holberton School!'); // Respond with a welcome message
    res.end(); // End the response
  }

  if (req.url === '/students') {
    // Handle the `/students` route
    res.write('This is the list of our students\n'); // Initial response message

    // Process the CSV file and send the student data
    countStudents(process.argv[2].toString())
      .then((output) => {
        const outString = output.slice(0, -1); // Remove the trailing newline
        res.end(outString); // Send the formatted student data
      })
      .catch(() => {
        // Handle errors in reading the file
        res.statusCode = 404;
        res.end('Cannot load the database'); // Respond with an error message
      });
  }
});

// Start the server and listen on the specified host and port
app.listen(port, hostname, () => {
  // Callback executed when the server starts successfully
});

// Export the server object for use in other modules
module.exports = app;
