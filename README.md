# React-Node-Express-MySQL Boilerplate

This project is a comprehensive boilerplate for building a full-stack web application with signup, login, and get details functionality. The frontend is developed using React.js, and the backend is built with Node.js and Express.js. User data is stored in a MySQL database managed through phpMyAdmin. Various libraries such as Concurrently, CORS, and Axios are utilized to streamline the development process.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MySQL (phpMyAdmin)
- **Other Libraries:** Concurrently, CORS, Axios, etc.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sowjanyaummadi/React-App.git
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd frontend
   npm install

   cd ../backend
   npm install
   ```

## API Endpoints

- `/signup` - POST: User registration
- `/login` - POST: User login
- `/get-details` - GET: Fetch user details

## Database

The MySQL database contains the following user details:

- Email
- Name
- Age
- Contact No
- Password

## Usage

1. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

   The server will run on http://localhost:8081.

2. Start the React app:

   ```bash
   cd ../frontend
   npm start
   ```

   The React app will run on http://localhost:3000.

3. Open your web browser and navigate to http://localhost:3000 to interact with the application.

## Project Structure

- `frontend/src`: Contains the React.js frontend implementation.
- `backend/server.js`: Node.js backend implementation.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
