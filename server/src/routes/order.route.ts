import express from 'express';
import authMiddleWare from '../middlewares/auth';
import { createOrder , getAllOrders} from '../controllers/order.controller';

const orderRouter = express.Router();

orderRouter.post("/order", authMiddleWare ,createOrder)

orderRouter.get("/order", authMiddleWare, getAllOrders)


export {orderRouter};