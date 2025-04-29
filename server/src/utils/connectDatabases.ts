import {prisma} from '../utils/client';
import {connectMongoDB} from '../config/mongo';
 
export const connectDatabases = async () => {
    try {
      // Connect to PostgreSQL via Prisma
      await prisma.$connect();
      console.log('PostgreSQL connected');
  
      // Connect to MongoDB
      await connectMongoDB();
    } catch (error) {
      console.error('Error connecting to databases:', error);
      process.exit(1);
    }
  };