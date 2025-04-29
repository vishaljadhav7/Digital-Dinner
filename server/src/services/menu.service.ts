import { MenuItem } from "../models/menu.model"
import { BadRequestError, InternalServerError, NotFoundError } from "../utils/errors/app.error";


export const getMenuItemService = async (data : {itemId : string}) => {
    try {

     if (!data.itemId || typeof data.itemId !== 'string' || data.itemId.trim() === '') {
       throw new BadRequestError('Invalid or missing item ID');
     }
   
     // Find menu item by ID
     const item = await MenuItem.findById(data.itemId).exec();

     // Check if item exists
    if (!item) {
        throw new NotFoundError('Menu item not found');
      }

     return item;
    } catch (error) {
        if (error instanceof Error) {
            if (error.name === 'CastError') {
              throw new BadRequestError('Invalid item ID format');
            }
            if (error.name === 'MongoTimeoutError') {
              console.error('Query timeout error:', error);
              throw new InternalServerError('Database query timed out');
            }
          }
      
          // Handle custom errors
          if (error instanceof BadRequestError || error instanceof NotFoundError || error instanceof InternalServerError) {
            throw error; 
          }
      
          // Handle unexpected errors
          throw new InternalServerError('Internal server error');
    }
}

