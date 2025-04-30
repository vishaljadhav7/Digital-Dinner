import {prisma} from '../utils/client';
import { Prisma } from '../generated/prisma';
import { InternalServerError, BadRequestError } from '../utils/errors/app.error';


interface IData {
    items : JSON
}

export const createOrderService = async (data :IData , userId : string) => {
   try{
      
   } catch(error) {

   } 
}