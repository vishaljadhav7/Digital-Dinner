import {z}  from 'zod';

export const signUpSchema = z.object({
    name: z.string().min(4, { message: 'Name must be at least 4 characters' }),
    email: z.string().email({ message: 'Invalid email address' }),
    phoneNum: z
      .string({ message: 'Phone number is required' }).min(10, {message : "atleast 10 digits"}), 
    password: z.string({ message: 'Password is required' }).min(6, { message: 'Password must be at least 6 characters' }),
  });
  
