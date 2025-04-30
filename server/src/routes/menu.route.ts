import express from 'express';
import { getMenuItem, getMenuItems } from '../controllers/menu.controller';
import { validateQueryParams } from '../validators';
import { getItemSchema } from '../validators/menu.validator';


const menuRouter = express.Router();


menuRouter.get("/menu",  getMenuItems);

menuRouter.get("/menu/item",  validateQueryParams(getItemSchema) ,getMenuItem);



export {menuRouter};