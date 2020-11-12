import { Treasure } from '../models';
import { TreasureModel } from '../models/treasure';
import { dbConfig } from '../models/connection';
import { QueryTypes } from 'sequelize';
import { TreasureInterface } from '../config/interfaces';

class TreasureRepository {
  public async create({
    latitude,
    longitude,
    name,
  }: {
    latitude: number;
    longitude: number;
    name: string;
  }): Promise<TreasureModel> {
    return Treasure.create({
      latitude,
      longitude,
      name,
    });
  }

  public async getInRadius({
    latitude,
    longitude,
    distance,
  }: {
    latitude: number;
    longitude: number;
    distance: number;
  }): Promise<TreasureInterface[]> {
    const query = `SELECT * FROM treasures WHERE acos(sin(${latitude}) * sin(latitude) + cos(${latitude}) 
    * cos(latitude) * cos(longitude - (${longitude}))) * 6371 <= ${distance}`;
    return await dbConfig.query(query, { raw: true, type: QueryTypes.SELECT });
  }

  public async deleteAll(): Promise<number> {
    return Treasure.destroy({ where: {} });
  }
}

export default new TreasureRepository();
