import Joi from 'joi';
import { ExpressRequest } from '../util/express';
import { NextFunction, Response } from 'express';
import ResponseHandler from '../util/response-handler';
import { ResponseType } from '../config/interfaces';
import { DISTANCE_IN_KILOMETERS, PRICE_VALUE_RANGE } from '../config/constants';

export async function validateFindTreasure(
  req: ExpressRequest,
  res: Response,
  next: NextFunction,
): Promise<ResponseType> {
  const schema = Joi.object().keys({
    latitude: Joi.number().strict().required(),
    longitude: Joi.number().strict().required(),
    distance: Joi.number()
      .integer()
      .strict()
      .allow(...Object.values(DISTANCE_IN_KILOMETERS)),
    prizeValue: Joi.number()
      .integer()
      .strict()
      .positive()
      .min(PRICE_VALUE_RANGE.MINIMUM)
      .max(PRICE_VALUE_RANGE.MAXIMUM),
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

export async function validateCreateTreasure(
  req: ExpressRequest,
  res: Response,
  next: NextFunction,
): Promise<ResponseType> {
  const schema = Joi.object().keys({
    latitude: Joi.number().strict().required(),
    longitude: Joi.number().strict().required(),
    name: Joi.string().required(),
    prizeValues: Joi.array()
      .items(
        Joi.number()
          .integer()
          .strict()
          .positive()
          .min(PRICE_VALUE_RANGE.MINIMUM)
          .max(PRICE_VALUE_RANGE.MAXIMUM),
      )
      .min(1)
      .max(5),
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
