import { NextFunction, Response } from 'express';
import { ExpressRequest } from '../util/express';
import { ResponseType } from '../config/interfaces';
import ResponseHandler from '../util/response-handler';
import UserRepository from '../repositories/user';

export async function signUp(
  req: ExpressRequest,
  res: Response,
  next: NextFunction,
): Promise<ResponseType> {
  const {
    name,
    email,
    age,
    password,
  }: {
    name: string;
    email: string;
    age: number;
    password: string;
  } = req.body;

  try {
    const existingUser = await UserRepository.getByEmail(email);
    if (existingUser) {
      return ResponseHandler.sendErrorResponse({
        res,
        error: 'User already exists',
      });
    }

    return ResponseHandler.sendSuccessResponse({
      res,
      message: 'Now we getting to the good stuffs',
    });
  } catch (error) {
    return next(error);
  }
}
