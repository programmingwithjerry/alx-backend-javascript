/**
 * Launch the Express application server.
 */
import express from 'express';
import router from './routes/index';

const app = express(); // Initialize an Express application
const port = 1245; // Specify the port for the server to run on

app.use('/', router); // Set up routing for the root path using the defined router

app.listen(port); // Start the server and listen for incoming requests on the specified port

export default app; // Export the application instance for use in other modules
