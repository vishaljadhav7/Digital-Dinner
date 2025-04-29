import { Request, Response, NextFunction, RequestHandler } from 'express';
import { z, AnyZodObject } from 'zod';

export const validateRequestBody = (schema: AnyZodObject): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        // console.log('Zod validation errors:', error.errors);
        res.status(400).json({
          success: false,
          errors: error.errors.map((err) => ({
            path: err.path.join('.'),
            message: err.message,
          })),
        });
        return; 
      }
      res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
      return; 
    }
  };
};


export const validateQueryParams = (schema: AnyZodObject) : RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {

          await schema.parseAsync(req.query);
       
          next();

      } catch (error) {
          // If the validation fails, 

          res.status(400).json({
              message: "Invalid query params",
              success: false,
              error: error
          });
          return;
      }
  }
}