import {z} from 'zod';
import mongoose from 'mongoose';


export const getItemSchema = z.object({
    itemId: z
      .string({ message: 'Item ID is required' })
      .refine((val) => mongoose.Types.ObjectId.isValid(val), {
        message: 'Invalid MongoDB ObjectId format',
      }),
  });