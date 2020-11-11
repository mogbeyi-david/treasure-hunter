import { dbConfig } from './connection';

import { UserFactory } from './user';
import { TreasureFactory } from './treasure';

export const User = UserFactory(dbConfig);
export const Treasure = TreasureFactory(dbConfig);

// User.hasMay(Skills);
//
// Skills.belongsToMany(Users, { through: 'users_have_skills' });
