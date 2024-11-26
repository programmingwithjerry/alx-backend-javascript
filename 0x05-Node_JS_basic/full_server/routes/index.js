/**
 * Define and manage application routes.
 */
import { Router } from 'express'; // Import the Router class from Express to define application routes
import AppController from '../controllers/AppController'; // Import the controller for handling general app routes
import StudentsController from '../controllers/StudentsController'; // Import the controller for handling student-related routes

const router = Router(); // Create a new Router instance

// Route for the homepage, handled by the AppController
router.get('/', AppController.getHomepage);

// Route to retrieve all students, handled by the StudentsController
router.get('/students', StudentsController.getAllStudents);

// Route to retrieve students by their major, handled by the StudentsController
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router; // Export the router to be used in the main application
