import { logger } from '../util/logger';
import { dbConfig } from './connection';

import { UserFactory } from './user';


export const User = UserFactory(dbConfig);

// User.hasMay(Skills);
//
// Skills.belongsToMany(Users, { through: 'users_have_skills' });

dbConfig
  .sync()
  .then(() => logger.info('connected to db'))
  .catch((error) => {
    throw new Error(`Unable to connect to the database, ${error}`);
  });
