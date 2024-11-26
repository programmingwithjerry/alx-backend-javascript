#!/usr/bin/env node
/**
 * This script defines a function `countStudents` that reads a CSV file asynchronously,
 * processes student data to count the total number of students and their distribution by field,
 * and logs the results. The function returns a Promise for asynchronous usage.
 */

const { readFile } = require('fs'); // Import the `readFile` function from the `fs` module to read files

/**
 * Reads a CSV file, processes student data, and logs the counts of students by field.
 * @param {string} fileName - The path to the CSV file to process.
 * @returns {Promise<Buffer>} A Promise that resolves with the file data or rejects with an error.
 */
function countStudents(fileName) {
  const students = {}; // Object to group student names by their field
  const fields = {}; // Object to count the number of students in each field
  let length = 0; // Counter for the total number of lines (students + header)

  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    readFile(fileName, (error, data) => {
      if (error) {
        // Reject the Promise with a custom error message if the file cannot be read
        reject(Error('Cannot load the database'));
      } else {
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
        console.log(`Number of students: ${l}`); // Log the total number of students

        // Log the count and list of students for each field
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') { // Skip the header field name
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
          }
        }

        // Resolve the Promise with the file data
        resolve(data);
      }
    });
  });
}

module.exports = countStudents; // Export the function for use in other modules
