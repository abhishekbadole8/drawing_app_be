Drawing App Backend

This is the backend server for the Drawing App, which handles storing and retrieving shape data.

## Environment Variables

    To run this project, you will need to set up the following environment variables:

- MONGOOSE_CONNECTION: MongoDB connection string, including the username, password, cluster URL, and database name.

- PORT: Port number on which the server will run.

## Endpoints

1.  Create Shape

    URL: /shapes

    Method: POST

    Description: Saves shape data to the database. If a shape of the same type already exists, it updates the existing shape data.

    Request Body:
    type: Type of the shape (e.g., "RECTANGLE", "CIRCLE", "LINE").
    data: Array containing the shape data.

    Response: Returns the created or updated shape data.
    Error Response: 500 Internal Server Error if an error occurs during processing.

2.  Get All Shapes

    URL: /shapes

    Method: GET

    Description: Retrieves all saved shape data from the database.

    Response: Returns an array of all shape data.

    Error Response: 500 Internal Server Error if an error occurs during processing.

3.  Delete All Shapes

    URL: /shapes

    Method: DELETE

    Description: Deletes all saved shape data from the database.

    Response: Returns a success message upon successful deletion.

    Error Response: 500 Internal Server Error if an error occurs during processing.

    ## Usage

         1. Clone the backend repository: git clone https://github.com/abhishekbadole8/drawing_app_be.git

         2. Navigate to the project directory: cd drawing_app_be

         3. Install dependencies: npm install

         4. Start the server: npm start

         5. The server will be running at http://localhost:5000.

## Technologies Used

- Express.js: Node.js web application framework for building APIs.

- MongoDB: NoSQL database used for storing shape data.

- Mongoose: MongoDB object modeling tool for Node.js.
