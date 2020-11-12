import Joi from 'joi';
import { ExpressRequest } from '../util/express';
import { NextFunction, Response } from 'express';
import ResponseHandler from '../util/response-handler';
import { ResponseType } from '../config/interfaces';
import { DISTANCE_IN_KILOMETERS } from '../config/constants';

export async function validateFindTreasure(
  req: ExpressRequest,
  res: Response,
  next: NextFunction,
): Promise<ResponseType> {
  const schema = Joi.object().keys({
    latitude: Joi.number().strict().required(),
    longitude: Joi.number().strict().required(),
    distance: Joi.number()
      .strict()
      .allow(...Object.values(DISTANCE_IN_KILOMETERS)),
    prizeValue: Joi.number().strict().positive(),
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
