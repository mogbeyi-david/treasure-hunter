import appRootPath from 'app-root-path';
import dotenv from 'dotenv';

import { throwIfUndefined } from '../helpers';

dotenv.config({ path: `${appRootPath.path}/.env` });

export const NODE_ENV = process.env.NODE_ENV;

export const APP_PORT = throwIfUndefined(process.env.APP_PORT, 'APP_PORT');

export const DB_NAME = throwIfUndefined(process.env.DB_NAME, 'DB_NAME');

export const DB_USER = throwIfUndefined(process.env.DB_USER, 'DB_USER');

export const DB_PASSWORD = throwIfUndefined(
  process.env.DB_PASSWORD,
  'DB_PASSWORD',
);

export const DB_PORT = throwIfUndefined(process.env.DB_PORT, 'DB_PORT');

export const DB_HOST = throwIfUndefined(process.env.DB_HOST, 'DB_HOST');

export const SALT_ROUNDS = throwIfUndefined(
  process.env.SALT_ROUNDS,
  'SALT_ROUNDS',
);
