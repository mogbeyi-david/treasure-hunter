import { NextFunction, Response } from 'express';
import { ExpressRequest } from '../util/express';
import { ResponseType } from '../config/interfaces';
import ResponseHandler from '../util/response-handler';
import TreasureRepository from '../repositories/treasure';
import MoneyValueRepository from '../repositories/money-value';

export async function find(
  req: ExpressRequest,
  res: Response,
  next: NextFunction,
): Promise<ResponseType> {
  const { latitude, longitude, distance, prizeValue } = req.body;
  try {
    const result = await TreasureRepository.getInRadius({
      latitude,
      longitude,
      distance,
      prizeValue,
    });
    return ResponseHandler.sendSuccessResponse({ res, data: { result } });
  } catch (error) {
    return next(error);
  }
}

export async function create(
  req: ExpressRequest,
  res: Response,
  next: NextFunction,
): Promise<ResponseType> {
  const { latitude, longitude, name, prizeValues } = req.body;
  try {
    const treasure = await TreasureRepository.create({
      latitude,
      longitude,
      name,
    });
    /**
     * Should use a transaction here and reverse everything if there is a failure
     */
    let moneyValues;
    if (treasure && treasure.id) {
      moneyValues = await MoneyValueRepository.createMany({
        treasureId: treasure.id,
        amounts: prizeValues,
      });
    }

    return ResponseHandler.sendSuccessResponse({
      res,
      data: { treasure, moneyValues },
    });
  } catch (error) {
    return next(error);
  }
}
