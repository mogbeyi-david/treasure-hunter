import { Treasure } from '../models';
import { TreasureModel } from '../models/treasure';

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
}
