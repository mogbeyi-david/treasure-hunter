import * as sequelize from 'sequelize';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from '../config/env';

export const dbConfig = new sequelize.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  port: Number(DB_PORT) || 54320,
  host: DB_HOST || 'localhost',
  dialect: 'mysql',
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
});
