import {Request, Response} from 'express';
import ApiResponse from '../utils/response/api.response';
import { createOrderService } from '../services/order.service';


//  req.body => JSON(items)
export const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const storedItems = await createOrderService(req.body, req.user?.id as string);  

    res.status(200).json(new ApiResponse(200, storedItems, "order created!"))
  } catch (error) {
      
  }
}
