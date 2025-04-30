import {Request, Response} from 'express';
import { MenuItem } from '../models/menu.model';
import ApiResponse from '../utils/response/api.response';
import { BadRequestError, InternalServerError, NotFoundError } from '../utils/errors/app.error';
import { getMenuItemService } from '../services/menu.service';

export const getMenuItems = async (req: Request, res: Response): Promise<void> => {
    try {
      const items = await MenuItem.find().exec(); 
  
      res.status(200).json(new ApiResponse(200, items, 'Items retrieved successfully'));
    } catch (error) {
      // Handle Mongoose-specific errors
      if (error instanceof Error) {
        if (error.name === 'MongooseServerSelectionError' || error.name === 'MongoNetworkError') {
          res.status(503).json({
            success: false,
            message: 'Database service unavailable',
          });
          return;
        }

        if (error.name === 'MongoTimeoutError') {
        //   console.error('Query timeout error:', error);
          res.status(504).json({
            success: false,
            message: 'Database query timed out',
          });
          return;
        }
      }
  
      res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  };


  export const getMenuItem = async (req: Request<{}, {}, {}, {itemId : string}>, res: Response): Promise<void> => {
    try {
      const itemId = req.query.itemId; 
      const item = await getMenuItemService({ itemId });
  
  
      res.status(200).json(new ApiResponse(200, item, 'Menu item retrieved successfully'));
    } catch (error) {
      if (error instanceof BadRequestError) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      } else if (error instanceof NotFoundError) {
        res.status(404).json({
          success: false,
          message: error.message,
        });
      } else if (error instanceof InternalServerError) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      } else {
        console.error('Unexpected error in getMenuItem:', error);
        res.status(500).json({
          success: false,
          message: 'Internal server error',
        });
      }
    }
  };