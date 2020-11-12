import { Treasure } from '../models';
import { TreasureModel } from '../models/treasure';
import exp from 'constants';

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

  public async deleteAll(): Promise<number> {
    return Treasure.destroy();
  }
}

export default new TreasureRepository();
