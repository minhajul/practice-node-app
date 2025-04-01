## Node.js MySQL App

A simple API application with MySQL integration for user management.

### Features
- Database connection health check
- User data retrieval endpoint
- Automated database seeding
- Environment-based configuration
- MySQL connection pooling

### Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/yourusername/node-mysql-api.git
cd node-mysql-api
npm install
```

### 2. Configure Database
Create .env file:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=practice_app
PORT=3000
```

### Setup Database & Seed Data

```npm run seed```

This will:
- Create database if missing
- Create users table if not exists
- Insert 3 test users

### Start Application

```npm run start```

Server runs at ```http://localhost:3000```

### API Documentation

### Health Check
```GET /health```

```json
{
  "status": "healthy",
  "database": "connected"
}
```

### Get all users
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

