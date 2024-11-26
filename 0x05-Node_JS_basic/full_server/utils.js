/**
 * Asynchronously reads a file and generates a summary report from CSV data.
 */
import fs from 'fs';

/**
 * Reads and processes the contents of a CSV file to organize data into a report.
 * @param {string} path - The file path to the CSV file.
 * @returns {Promise<object>} A Promise that resolves to an object categorizing names by their field.
 */
function readDatabase(path) {
  return new Promise((resolve, reject) => {
    // Attempt to read the file content
    fs.readFile(path, 'utf8', (err, records) => {
      if (err) {
        // Reject the Promise if the file cannot be accessed or read
        reject(new Error('Cannot load the database'));
      } else {
        // Split the file content into individual lines
        const content = records.split('\n');
        content.splice(0, 1); // Remove the header row

        const report = {}; // Initialize the report object to store categorized data

        // Iterate over each record in the file
        content.forEach((record) => {
          const line = record.split(','); // Split the record into fields
          if (line[3] && line[0]) { // Ensure the necessary fields are not empty
            // Check if the category (field) already exists in the report
            if (Object.keys(report).indexOf(line[3]) === -1) {
              report[line[3]] = [line[0]]; // Add a new category with the first name
            } else {
              report[line[3]].push(line[0]); // Append the name to the existing category
            }
          }
        });

        // Resolve the Promise with the structured report
        resolve(report);
      }
    });
  });
}

export default readDatabase;
