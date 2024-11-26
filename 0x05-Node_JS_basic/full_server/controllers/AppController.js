/**
 * Controller for handling application routes and logic.
 */
class AppController {
  /**
   * Handles requests to the homepage by sending a greeting message.
   * @param {object} request - The HTTP request object.
   * @param {object} response - The HTTP response object.
   */
  static getHomepage(request, response) {
    response.statusCode = 200; // Set the HTTP status code to 200 (OK)
    response.send('Hello Holberton School!'); // Send a response with a greeting message
  }
}

export default AppController;
