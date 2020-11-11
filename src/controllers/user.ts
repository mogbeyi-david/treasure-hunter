import { NextFunction, Response } from 'express';
import { ExpressRequest } from '../util/express';
import { ResponseType } from '../config/interfaces';
import ResponseHandler from '../util/response-handler';
import UserRepository from '../repositories/user';
// import * as MerchantHelpers from '../helpers/user';
import { throwIfUndefined } from '../helpers';

export async function signUp(
  req: ExpressRequest,
  res: Response,
  next: NextFunction,
): Promise<ResponseType> {
  const {
    email,
    password,
  }: {
    email: string;
    password: string;
  } = req.body;

  try {

  } catch (error) {
    return next(error);
  }
}
