import mongoose from 'mongoose';


export const connectMongoDB = async () => {
  try {
   const connectionInstance = await mongoose.connect(process.env.MONGODB_URI!);
   console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};