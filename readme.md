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

#### Start Docker
I am using Docker Compose to run the PostgreSQL database. Start Docker and run the command below to get your database up and running.

```docker-compose up --build -d```

#### Configure Database
Create ```.env``` file:

```
DATABASE_URL=postgresql://admin:admin@localhost:5431/practice_db
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