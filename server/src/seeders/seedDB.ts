import mongoose from "mongoose";
import { MenuItem } from "../models/menu.model";
import { mockData } from "./menuItems";

const connectDB = async () => {
    try {
    await mongoose.connect(process.env.MONGODB_URI!);
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    }
  };
  
  // Clear existing data
  const clearData = async () => {
    try {
      await MenuItem.deleteMany({});
      console.log('Existing menu items cleared');
    } catch (error) {
      console.error('Error clearing data:', error);
      process.exit(1);
    }
  };
  
  // Seed data
  const seedData = async () => {
    try {
      await MenuItem.insertMany(mockData);
      console.log('Menu items seeded successfully');
    } catch (error) {
      console.error('Error seeding data:', error);
      process.exit(1);
    }
  };
  
  // Main function
  const runSeeder = async () => {
    await connectDB();
    await clearData();
    await seedData();
    
    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  };
  
  // Execute seeder
  runSeeder().catch(error => {
    console.error('Seeder error:', error);
    process.exit(1);
  });