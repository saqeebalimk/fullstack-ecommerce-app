# Ecommerce Test

A full-stack ecommerce application with React frontend and Node.js/Express backend.

## Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js
- **Database**: In-memory (for testing purposes)

## Project Structure

```
ecommerce-test/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── data/
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── styles/
│   ├── public/
│   └── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/saqeebalimk/fullstack-ecommerce-app.git
   cd ecommerce-test
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

## Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```
   The backend will run on http://localhost:5000 (or check server.js for port).

2. Start the frontend:
   ```
   cd frontend
   npm start
   ```
   The frontend will run on http://localhost:3000.

## API Endpoints

- **Products**:
  - GET /api/products - Get all products
  - GET /api/products/:id - Get product by ID

- **Orders**:
  - GET /api/orders - Get all orders
  - POST /api/orders - Create a new order

## Features

- View product list
- Add products to cart
- View cart and manage items
- Place orders

## Development

- Backend uses ES modules
- Frontend is a standard React app
- CORS enabled for frontend-backend communication
