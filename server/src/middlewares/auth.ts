import { Request, Response, NextFunction } from "express"; 
import {prisma} from '../utils/client';
import jwt from "jsonwebtoken";


interface User {
    id: string;
    name?: string;
    email?: string;
  }
  
  // Extend Express Request type to include user
  declare module "express" {
    export interface Request {
      user?: User;
    }
  }
  

  const authMiddleWare = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
  
    const token = req.cookies.token; 
  
    if (!token) {
      res.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }
  
    try {
    
      const decoded = jwt.verify(token, process.env.SECRET_KEY!) as { id: string };
  
      if (!decoded.id) {
        res.status(401).json({ success: false, message: "Invalid token" });
        return;
      }
  
      const userInfo = await prisma.user.findUnique({ where: { id: decoded.id } });
  
      if (!userInfo) {
        res.status(401).json({ success: false, message: "Invalid token: User not found" });
        return;
      }
  
      req.user = { id: decoded.id }; 
      next();
    } catch (error: any) {
      console.error("Token Verification Middleware Error:", error.message);
      res.status(401).json({
        success: false,
        message: `Invalid token: ${error.message}`,
      });
    }
  };
  
  export default authMiddleWare;