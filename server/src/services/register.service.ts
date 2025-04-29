import {prisma} from '../utils/client';
import { Prisma } from '../generated/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SignupBody } from '../types';
import { InternalServerError, BadRequestError } from '../utils/errors/app.error';


export const registerUserService = async (data: SignupBody) => {
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
      // console.error('Prisma error:', error);
      throw new InternalServerError('Failed to create user');
    }
    // console.error('Unexpected error in registerUserService:', error);
    throw new InternalServerError('Internal server error');
  }
};

