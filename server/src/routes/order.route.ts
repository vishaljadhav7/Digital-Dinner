import express from 'express';
import authMiddleWare from '../middlewares/auth';
import { createOrder } from '../controllers/order.controller';

const orderRouter = express.Router();

orderRouter.post("/order", authMiddleWare, createOrder)
