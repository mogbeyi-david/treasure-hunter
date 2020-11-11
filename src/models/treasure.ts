import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
import { TreasureInterface } from '../config/interfaces';

export interface TreasureModel
  extends Model<TreasureInterface>,
    TreasureInterface {}
export class Treasure extends Model<TreasureModel, TreasureInterface> {}

export type TreasureStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): TreasureModel;
};

export function TreasureFactory(sequelize: Sequelize): TreasureStatic {
  return <TreasureStatic>sequelize.define('treasures', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
