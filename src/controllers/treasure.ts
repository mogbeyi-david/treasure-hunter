import { NextFunction, Response } from 'express';
import { ExpressRequest } from '../util/express';
import { ResponseType } from '../config/interfaces';
import ResponseHandler from '../util/response-handler';



export async function find(
    req: ExpressRequest,
    res: Response,
    next: NextFunction,
): Promise<ResponseType> {

    try {
    } catch (error) {
        return next(error);
    }
}
