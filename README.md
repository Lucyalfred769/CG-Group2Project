# Simple E-Commerce App

This is a simple kitchenware store application built with a Node.js backend and a React frontend. The backend serves product data (currently stored as an in-memory array) and handles API requests, while the frontend displays the products and allows users to add them to a shopping cart.

## Project Structure

- **Backend (Node.js)**: Provides product data and API endpoints.
- **Frontend (React)**: Displays kitchenware products and allows users to add them to a shopping cart.
- **Docker**: The application is containerized using Docker for easy setup and deployment.

## Prerequisites

Make sure you have the following installed on your system:

- Docker
- Node.js (for local development)

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Lucyalfred769/simple-ecommerce-app.git

2. **Navigate to the Project Directory**
   Change to the project directory:

   ```bash
   cd simple-ecommerce-app
3. **Install Dependencies**
   For the Frontend:
   Navigate to the frontend directory and install the dependencies:

   ```bash
   cd frontend
   npm install
   ```
   For the Backend:
   Navigate to the backend directory and install the dependencies:

   ```bash
   cd ../backend
   npm install

## Usage
### Start the Backend server
From the backend directory, run:

```bash
node server.js
```

The backend will start running on port 7241.

### Start the Frontend Application

Open a new terminal window, navigate to the frontend directory, and run:

```bash
cd ../frontend
npm start
```

The frontend will open in your default web browser at [http://localhost:3000](http://localhost:3000).

### View the Application

Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the Simple E-Commerce App. You should be able to see the list of kitchenware products displayed.

## Running the Application with Docker

The project contains a `docker-compose.yml` file to simplify running the backend and frontend using Docker. The `docker-compose.yml` file is used to orchestrate the frontend and backend containers.

### Build and start the containers:

```bash
docker-compose up --build
```

### Access the application
- Backend: [http://localhost:7241](http://localhost:7241)
- Frontend: [http://localhost:3000](http://localhost:3000)

## Future Improvements
- Integrating a real database for product data.
- Adding more features to the shopping cart (e.g., product quantity, removing items).
- Handling backend errors more gracefully on the frontend.

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, please follow these steps:

1. **Fork the repository** on GitHub.

2. Create a new feature branch:

   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. Commit your changes:

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. Push the branch to your fork:

   ```bash
   git push origin feature/AmazingFeature
   ```

5. Open a Pull Request.
