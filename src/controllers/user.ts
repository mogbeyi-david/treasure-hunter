import { NextFunction, Response } from 'express';
import { ExpressRequest } from '../util/express';
import { ResponseType } from '../config/interfaces';
import ResponseHandler from '../util/response-handler';
import UserRepository from '../repositories/user';
import * as UserHelpers from '../helpers/user'

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

    const result = await UserRepository.create({ name, age, email, password });
    const user = UserHelpers.removeUserPassword(result);
    return ResponseHandler.sendSuccessResponse({
      res,
      data: { user },
      message: 'User created successfully',
    });
  } catch (error) {
    return next(error);
  }
}
