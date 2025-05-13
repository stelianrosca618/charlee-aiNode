# Node.js MySQL API

A robust and scalable Node.js backend application with MySQL integration, following modern architecture patterns.

## Features

- RESTful API with Express.js
- MySQL connection with connection pooling
- Environment-based configuration
- Comprehensive error handling
- Data validation
- Request logging
- Database migrations and seeding

## Getting Started

### Prerequisites

- Node.js (v14+)
- MySQL (v5.7+)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on the `.env.example`
4. Create the MySQL database:
   ```sql
   CREATE DATABASE node_mysql_db;
   ```

### Database Setup

Run the migration script to create the database tables:

```
npm run migrate
```

Seed the database with initial data:

```
npm run seed
```

### Starting the Server

Development mode:

```
npm run dev
```

Production mode:

```
npm start
```

## API Documentation

### Base URL

```
http://localhost:3000/api
```

### Available Endpoints

#### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a single user
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

#### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

### Example Requests

#### Create a User

```http
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Products with Filtering

```http
GET /api/products?minPrice=200&maxPrice=1000&page=1&limit=10
```

## Project Structure

```
src/
├── config/             # Configuration files
├── controllers/        # Route controllers
├── middleware/         # Custom middleware
├── models/             # Database models
├── routes/             # API routes
├── scripts/            # Migration and seed scripts
├── utils/              # Utility functions
└── server.js           # Entry point
```

## Error Handling

The API uses a consistent error response format:

```json
{
  "success": false,
  "status": 404,
  "message": "User not found",
  "stack": "Error stack trace (only in development)"
}
```

## License

This project is licensed under the MIT License.