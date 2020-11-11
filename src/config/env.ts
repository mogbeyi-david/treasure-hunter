import appRootPath from 'app-root-path';
import dotenv from 'dotenv';

import { throwIfUndefined } from '../helpers';

dotenv.config({ path: `${appRootPath.path}/.env` });

export const NODE_ENV = process.env.NODE_ENV;

export const APP_PORT = throwIfUndefined(process.env.APP_PORT, 'APP_PORT');

export const DB_CONNECTION_STRING = throwIfUndefined(
  process.env.DB_CONNECTION_STRING,
  'DB_CONNECTION_STRING',
);
