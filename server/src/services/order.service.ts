import { prisma } from '../utils/client';
import { Prisma } from '../../generated/prisma';
import { InternalServerError, BadRequestError } from '../utils/errors/app.error';

interface IOrder {
    userId: string;
    items: JSON;
}

export const createOrderService = async (data: IOrder, userId: string) => {
   try {
      if (!data.items || !data.userId) {
         throw new BadRequestError("userId or items required");
      }

     
      let parsedItems: any;
      try {
         parsedItems = typeof data.items === 'string' ? JSON.parse(data.items) : data.items;
      } catch (error) {
         throw new BadRequestError("Invalid items format");
      }

     
      if (data.userId !== userId) {
         throw new BadRequestError("Unauthorized userId");
      }

      const res = await prisma.order.create({
         data: {
            userId: data.userId,
            items: parsedItems, 
         },
      });

      return res;

   } catch (error) {
      if (error instanceof BadRequestError) {
         throw error; 
      }
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        
         if (error.code === 'P2003') {
            throw new BadRequestError("Invalid userId: User does not exist");
         }
      }
      // Log error for debugging (optional, assuming logger exists)
      throw new InternalServerError("Failed to create order");
   }
}