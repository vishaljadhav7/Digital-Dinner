import {Request, Response} from 'express';
import { registerUserService , signInUserService} from '../services/register.service';
import {SignUpBody, SignInBody} from '../types/index'
import ApiResponse from '../utils/response/api.response';
import { BadRequestError, InternalServerError, NotFoundError, UnauthorizedError } from '../utils/errors/app.error';


const options = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  maxAge: 3600000, // 1 hour
};

export const registerUser = async (
  req: Request<{}, {}, SignUpBody>,
  res: Response
): Promise<void> => {
  try {
    const user = await registerUserService(req.body);

    if (!user || !user.data) {
      throw new InternalServerError('Failed to register user');
    }

    res
      .status(200)
      .cookie('token', user.token, options)
      .json(new ApiResponse(200, user.data, 'User registered!'));
  } catch (error) {
    if (error instanceof BadRequestError) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    } else if (error instanceof InternalServerError) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    } else {

      res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  }
};

export const signInUser = async (
  req: Request<{}, {}, SignInBody>,
  res: Response
) => {
  try {
    const user = await signInUserService(req.body);

    if (!user || !user.data) {
      throw new InternalServerError('Failed to register user');
    }

     res.status(200).cookie("token", user.token).json(new ApiResponse(200, user.data, "user sign in success!"))
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    } else if (error instanceof InternalServerError) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    } 
    if(error  instanceof UnauthorizedError){
      res.status(401).json({
        success: false,
        message: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  }
}