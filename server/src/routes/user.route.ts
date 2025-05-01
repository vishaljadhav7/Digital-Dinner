import express from 'express';
import { signUpSchema , signInSchema} from '../validators/user.validator';
import { validateRequestBody } from '../validators';
import { registerUser, signInUser, signOut } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.post("/sign-up", validateRequestBody(signUpSchema) , registerUser);

userRouter.post("/sign-in", validateRequestBody(signInSchema) ,  signInUser)

userRouter.post("/sign-out", signOut)

export {userRouter}