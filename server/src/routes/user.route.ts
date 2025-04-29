import express from 'express';
import { userSchema } from '../validators/user.validator';
import { validateRequestBody } from '../validators';
import { registerUser } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.post("/sign-up", validateRequestBody(userSchema) , registerUser);

export {userRouter}