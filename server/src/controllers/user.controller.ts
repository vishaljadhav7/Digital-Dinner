import {Request, Response} from 'express';
import { registerUserService } from '../services/register.service';
import {SignupBody} from '../types/index'
import ApiResponse from '../utils/response/api.response';
import { BadRequestError, InternalServerError } from '../utils/errors/app.error';


const options = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  maxAge: 3600000, // 1 hour
};

export const registerUser = async (
  req: Request<{}, {}, SignupBody>,
  res: Response
): Promise<void> => {
  try {
    const user = await registerUserService(req.body);

    if (!user || !user.data) {
      throw new InternalServerError('Failed to register user');
    }

    console.log('user from reg =>>>> ', user);

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
      console.error('Unexpected error in registerUser:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  }
};