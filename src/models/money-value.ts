import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
import { MoneyValueInterface } from '../config/interfaces';

export interface MoneyValueModel
  extends Model<MoneyValueInterface>,
    MoneyValueInterface {}
export class Treasure extends Model<MoneyValueModel, MoneyValueInterface> {}

export type MoneyValueStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): MoneyValueModel;
};

export function MoneyValueFactory(sequelize: Sequelize): MoneyValueStatic {
  return <MoneyValueStatic>sequelize.define('money_values', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    treasure_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'treasures',
        key: 'id'
      },
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    isCollected: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
}
