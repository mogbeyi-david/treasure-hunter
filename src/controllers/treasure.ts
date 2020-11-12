import { NextFunction, Response } from 'express';
import { ExpressRequest } from '../util/express';
import { ResponseType } from '../config/interfaces';
import ResponseHandler from '../util/response-handler';
import TreasureRepository from '../repositories/treasure';

export async function find(
  req: ExpressRequest,
  res: Response,
  next: NextFunction,
): Promise<ResponseType> {
  const { latitude, longitude, distance } = req.body;
  try {
    const result = await TreasureRepository.getInRadius({
      latitude,
      longitude,
      distance,
    });
    return ResponseHandler.sendSuccessResponse({ res, data: { result } });
  } catch (error) {
    return next(error);
  }
}
