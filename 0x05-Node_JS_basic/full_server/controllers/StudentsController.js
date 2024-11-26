/**
 * Controller class for managing student-related actions.
 */
import readDatabase from '../utils';

class StudentsController {
  /**
   * Handles requests to retrieve and display all students grouped by their fields of study.
   * @param {object} request - The HTTP request object.
   * @param {object} response - The HTTP response object.
   */
  static async getAllStudents(request, response) {
    try {
      const filepath = process.argv.length > 2 ? process.argv[2] : ''; // Determine the file path from command-line arguments
      const records = await readDatabase(filepath); // Read and parse student data from the database file
      const fields = Object.keys(records); // Get a list of all fields of study
      fields.sort((x, y) => (x < y ? -1 : x > y ? 1 : 0)); // Sort fields alphabetically

      response.statusCode = 200; // Set HTTP status code to 200 (OK)
      response.write('This is the list of our students\n'); // Initial response message

      // Iterate through each field and append student details to the response
      for (const field of fields) {
        response.write(`Number of students in ${field}: ${records[field].length}. List: ${records[field].join(', ')}`);
        if (fields.indexOf(field) !== fields.length - 1) response.write('\n'); // Add a newline between fields
      }
    } catch (err) {
      response.statusCode = 500; // Set HTTP status code to 500 (Internal Server Error)
      response.write(err.message); // Return the error message
    }
    response.end(); // End the response
  }

  /**
   * Handles requests to retrieve and display students in a specific major.
   * @param {object} request - The HTTP request object.
   * @param {object} response - The HTTP response object.
   */
  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params; // Extract the major parameter from the request
    if (!['CS', 'SWE'].includes(major.toUpperCase())) {
      // Validate the major parameter
      response.statusCode = 500; // Set HTTP status code to 500 (Internal Server Error)
      response.send('Major parameter must be CS or SWE'); // Respond with an error message for invalid majors
    } else {
      const filepath = process.argv.length > 2 ? process.argv[2] : ''; // Determine the file path from command-line arguments
      try {
        const records = await readDatabase(filepath); // Read and parse student data from the database file
        response.statusCode = 200; // Set HTTP status code to 200 (OK)
        response.write(`List: ${records[major.toUpperCase()].join(', ')}`); // Send a list of students in the specified major
      } catch (err) {
        response.statusCode = 500; // Set HTTP status code to 500 (Internal Server Error)
        response.write(err.message); // Return the error message
      }
      response.end(); // End the response
    }
  }
}

export default StudentsController;
