# MongoDB Recipes System

A web application to manage and share recipes using MongoDB, Express.js, and Node.js.

## Features

- Add, view, edit, and delete recipes
- User authentication and authorization
- Search recipes by ingredients or name
- Responsive design using Pug and CSS

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yanness168/Mongodb-recipes-system.git
    cd Mongodb-recipes-system
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
    ```
    MONGODB_URI=your_mongodb_connection_string
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register or log in to your account.
3. Add, edit, and manage your recipes.

## Project Structure

- `bin/`: Contains the server startup script.
- `config/`: Configuration files for the application.
- `models/`: Mongoose models for MongoDB.
- `public/`: Static files like CSS and images.
- `routes/`: Express routes for handling requests.
- `views/`: Pug templates for rendering HTML.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/)
