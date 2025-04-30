import {Request, Response} from 'express';
import ApiResponse from '../utils/response/api.response';
import { createOrderService } from '../services/order.service';
import { BadRequestError, UnauthorizedError } from '../utils/errors/app.error';
import { prisma } from '../utils/client';


interface IOrder {
  userId : string;
  items : JSON
}

export const createOrder = async (req: Request<{}, {}, IOrder>, res: Response): Promise<void> => {
  try {
    const storedItems = await createOrderService(req.body, req.body.userId);
    res.status(200).json(new ApiResponse(200, storedItems, "order created!"));
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      res.status(401).json({
        statusCode: 401,
        message: error.message
      });
    } else if (error instanceof BadRequestError) {
      res.status(400).json({
        statusCode: 400,
        message: error.message
      });
    } else {
      res.status(500).json({
        statusCode: 500,
        message: "Server error"
      });
    }
  }
};

export const getAllOrders = async (req : Request, res : Response) => {
  try {
    const orders = await prisma.order.findMany({
      where : {
        userId : req.user?.id
      },
      select : {
        id : true,
        items : true,
        userId : true,
      }
    })

    res.status(200).json(new ApiResponse(200, orders, "all order retrived"))
    return 
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Server error"
    });
  }
}