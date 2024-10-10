# Simple E-Commerce App

This application is designed to provide a user-friendly interface for browsing kitchenware products. Users can view product details, and it serves as a great example of a full-stack application using React for the frontend and Node.js with MySQL for the backend.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Contributing](#contributing)

## Features

- **User-Friendly Interface**: Easily navigate through a list of kitchenware products.
- **Product Display**: Each product includes an image, name, and price.
- **Responsive Design**: The application is responsive and works on various devices.
- **Backend API**: A RESTful API built with Node.js for fetching product data from a MySQL database.

## Technologies Used

- **Frontend**:
  - React: A JavaScript library for building user interfaces.
  - Axios: For making HTTP requests to the backend.
  
- **Backend**:
  - Node.js: A JavaScript runtime for server-side applications.
  - Express: A web application framework for Node.js.
  - MySQL: A relational database management system for storing product data.

## Getting Started

To get a local copy of the application up and running, follow these steps:

### Prerequisites

- **Node.js** (v14 or later)
- **npm** (Node package manager)
- **MySQL** (for the database)

### Installation

1. **Clone the Repository**

   Open your terminal and run the following command:

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

#### Navigate to the Project Directory

Change to the project directory:

```bash
cd simple-ecommerce-app
```
### Install Dependencies

### For the Frontend:
Navigate to the frontend directory and install the dependencies:

```bash
cd frontend
npm install
```

### For the Backend:
Navigate to the backend directory and install the dependencies:

```bash
cd ../backend
npm install
```

### Set Up the MySQL Database

- Create a MySQL database named `kitchenware_store`.
- Add the necessary tables and seed the database with initial product data. Refer to the provided SQL scripts or manually insert data using a MySQL client.
## Start the Backend Server

From the backend directory, run:

```bash
node server.js
```

The backend will start running on port 3001.

### Start the Frontend Application

Open a new terminal window, navigate to the frontend directory, and run:

```bash
cd ../frontend
npm start
```

The frontend will open in your default web browser at [http://localhost:3000](http://localhost:3000).

### View the Application

Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the Simple E-Commerce App. You should be able to see the list of kitchenware products displayed.

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

  
