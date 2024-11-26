#!/usr/bin/env node
/**
 * This script defines a function `countStudents` that reads a CSV file,
 * counts the number of students in different fields, and logs the results to the console.
 */

const fs = require('fs'); // Import the file system module to handle file operations

/**
 * Reads a CSV file, processes student data, and logs the counts of students by field.
 * @param {string} fileName - The path to the CSV file to process.
 * @throws {Error} If the file cannot be read.
 */
function countStudents(fileName) {
  const students = {}; // Object to group student names by their field
  const fields = {}; // Object to count the number of students in each field
  let length = 0; // Counter for the total number of lines (students + header)

  try {
    // Read the entire file content synchronously as UTF-8
    const content = fs.readFileSync(fileName, 'utf-8');
    
    // Split the file content into lines
    const lines = content.toString().split('\n');
    
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
  } catch (error) {
    // Handle file read errors and throw a custom error message
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents; // Export the function for use in other modules
