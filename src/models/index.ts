import { dbConfig } from './connection';

import { MigrationFactory } from './migrations';
import { UserFactory } from './user';
import { TreasureFactory } from './treasure';
import { MoneyValueFactory } from './money-value';

export const Migration = MigrationFactory(dbConfig);
export const User = UserFactory(dbConfig);
export const Treasure = TreasureFactory(dbConfig);
export const MoneyValue = MoneyValueFactory(dbConfig);

//Define relationships between treasure and money value
Treasure.hasMany(MoneyValue, { foreignKey: 'treasure_id', sourceKey: 'id' });
MoneyValue.belongsTo(Treasure, { foreignKey: 'treasure_id', targetKey: 'id' });
