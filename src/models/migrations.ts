import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
import { MigrationInterface } from '../config/interfaces';

export interface MigrationModel
  extends Model<MigrationInterface>,
    MigrationInterface {}
export class Migration extends Model<MigrationModel, MigrationInterface> {}

export type MigrationStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): MigrationModel;
};

export function MigrationFactory(sequelize: Sequelize): MigrationStatic {
  return <MigrationStatic>sequelize.define('migrations', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastRun: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    runCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
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
