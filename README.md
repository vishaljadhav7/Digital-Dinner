# Digital Dinner - Installation Guide

## Manual Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/vishaljadhav7/Digital-Dinner
cd Digital-Dinner
```

### 2. Install Dependencies
Install all necessary dependencies for both client and server applications:
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### 3. Configure Database Connections
Set up your database connection strings in the appropriate configuration files:

#### MongoDB Connection String
```
mongodb+srv://<username>:<password>@beyondthebasics.abcde.mongodb.net/<db_name>
```

#### PostgreSQL Connection String
```
postgresql://user:password@192.168.1.100:5432/<db_name>
```

### 4. Migrate Database Schema
Run the Prisma migration within the server directory:
```bash
cd server
npx prisma migrate dev
# OR
npm run prisma:migrate
```

### 5. Seed MongoDB Database
Populate your MongoDB database with initial data:
```bash
npx ts-node server/src/seeders/seedDB.ts
```

### 6. Start the Applications

#### Start the Client (React + Vite)
```bash
cd client
npm run dev
```

#### Start the Server (Node.js)
```bash
cd server
npm run dev
```

## Accessing the Application
Once both services are running, you can access the application at:
- Frontend: http://localhost:5173 (default Vite port)
- Backend API: http://localhost:3000 (default server port)

## Troubleshooting
If you encounter any issues during installation or startup, please check the following:
- Ensure all environment variables are correctly set
- Verify database connection strings are accurate
- Confirm all dependencies were successfully installed

For further assistance, please open an issue on the GitHub repository.
