import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import express from 'express';
import { NextFunction, Response } from 'express';
import morgan from 'morgan';
import ResponseHandler from './util/response-handler';
import { connectToDatabase } from './models/connection';

import { ExpressRequest } from './util/express';
connectToDatabase()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
const app = express();

app.use(morgan('combined'));

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

// ROUTES
app.get('/', async (req: ExpressRequest, res: Response) => {
  res.json({
    success: true,
    message: 'Welcome to the Lucky Shine Application',
  });
});

app.use((req: ExpressRequest, res: Response) => {
  return ResponseHandler.sendErrorResponse({ res, error: 'Route not found' });
});

app.use(
  (error: any, req: ExpressRequest, res: Response, next: NextFunction) => {
    return ResponseHandler.sendFatalErrorResponse({ res, error });
  },
);

export default app;
