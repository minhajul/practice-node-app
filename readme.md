## Node.js MySQL App

A simple API application with MySQL integration for user management.

### Features
- Database connection health check
- User data retrieval endpoint
- Automated database seeding
- Environment-based configuration
- MySQL connection pooling

### Quick Start

Clone the project and follow the steps below to run the application.

#### Clone the Repository

```
git clone https://github.com/minhajul/practice-node-app.git
cd practice-node-app
```

#### Install Dependencies
```npm install```

#### Configure Database
Create .env file:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=practice_app
PORT=3000
```

#### Setup Database & Seed Data

```npm run seed```

This will:
- Create database if missing
- Create users table if not exists
- Insert 3 test users

#### Start Application

```npm run start```

Server runs at ```http://localhost:3000```

#### API Documentation

### Health Check
```GET /health```

```json
{
  "status": "healthy",
  "database": "connected"
}
```

#### Get all users
```GET /users```

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
]
```
