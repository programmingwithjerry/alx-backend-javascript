/**
 * Initialize and run the Express application server.
 */
import express from 'express';
import router from './routes/index';

const app = express(); // Create an Express application instance
const port = 1245; // Define the port for the server to listen on

app.use('/', router); // Attach the router to handle requests for the root path

app.listen(port); // Start the server and listen on the specified port

export default app;
