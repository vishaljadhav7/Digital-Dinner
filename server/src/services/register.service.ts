import {prisma} from '../utils/client';
import { Prisma } from '../../generated/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SignUpBody, SignInBody } from '../types';
import { InternalServerError, BadRequestError, NotFoundError, UnauthorizedError } from '../utils/errors/app.error';


export const registerUserService = async (data: SignUpBody) => {
  try {
    const { name, phoneNum, email, password } = data;

    // Check for existing user
    const userExist = await prisma.user.findFirst({
      where: { email },
    });

    if (userExist) {
      throw new BadRequestError('User already exists!');
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);
    // Create user
    const userRegistered = await prisma.user.create({
      data: {
        name,
        phoneNum, 
        password: hashPassword,
        email,
      },
      select: {
        id: true,
        name: true,
        phoneNum: true,
        email: true,
        createdAt: true,
      },
    });


    // Validate JWT secret
    const secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
      throw new InternalServerError('Server configuration error: Missing JWT secret');
    }

    // Generate JWT
    const token = jwt.sign({ id: userRegistered.id }, secretKey, {
      expiresIn: '1h',
    });

    return {
      data: userRegistered,
      token,
    };
  } catch (error) {
    if (error instanceof BadRequestError || error instanceof InternalServerError) {
      throw error; // throw custom error
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new BadRequestError('Email or phone number is already registered');
      }
      throw new InternalServerError('Failed to create user');
    }

    throw new InternalServerError('Internal server error');
  }
};


export const signInUserService = async (data: SignInBody) => {
  try {
    const { email, password } = data;

    // Find user by email
    const userExist = await prisma.user.findFirst({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNum: true,
        password: true, 
      },
    });

    if (!userExist) {
      throw new NotFoundError('User not found');
    }

    // Verify password
    let isValidPassword: boolean;
    try {
      isValidPassword = await bcrypt.compare(password, userExist.password);
    } catch (error) {
      console.error('Error comparing passwords:', error);
      throw new InternalServerError('Failed to verify credentials');
    }

    if (!isValidPassword) {
      throw new UnauthorizedError('Invalid credentials');
    }

  
    const secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
      throw new InternalServerError('Server configuration error: Missing JWT secret');
    }

    // Generate JWT
    let token: string;
    try {
      token = jwt.sign({ id: userExist.id }, secretKey, { expiresIn: '1h' });
    } catch (error) {
      throw new InternalServerError('Failed to generate authentication token');
    }
    
    const userData = {
      id: userExist.id,
      name: userExist.name,
      email: userExist.email,
      phoneNum: userExist.phoneNum,
    };

    return {
      data: userData,
      token,
    };
  } catch (error) {
    // Handle custom errors
    if (
      error instanceof NotFoundError ||
      error instanceof UnauthorizedError ||
      error instanceof InternalServerError
    ) {
      throw error; // throw custom errors
    }

    // Handle Prisma errors
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new InternalServerError('Failed to authenticate user');
    }
    

    // Handle unexpected errors
    throw new InternalServerError('Internal server error');
  }
};