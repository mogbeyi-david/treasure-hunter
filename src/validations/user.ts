import Joi from 'joi';
import { ExpressRequest } from '../util/express';
import { NextFunction, Response } from 'express';
import ResponseHandler from '../util/response-handler';
import { ResponseType } from '../config/interfaces';

export async function validateCreateUser(
  req: ExpressRequest,
  res: Response,
  next: NextFunction,
): Promise<ResponseType> {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().strict().positive().min(18).required(),
    password: Joi.string().required(),
  });
  const validation = schema.validate(req.body);
  if (validation.error) {
    return ResponseHandler.sendErrorResponse({
      res,
      error: validation.error.details[0].message,
    });
  }
  return next();
}
