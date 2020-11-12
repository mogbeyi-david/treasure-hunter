import fs from 'fs';
import { TreasureInterface } from '../../src/config/interfaces';

const jsonData = require('../../src/seed-data/treasures.json');
import TreasureRepository from '../../src/repositories/treasure';
import MoneyValueRepository from '../../src/repositories/money-value';

export class CreateTreasuresMigrations {
  public static async up() {
    const treasures: TreasureInterface[] = jsonData;
    for (const treasure of treasures) {
      const result = await TreasureRepository.create({
        latitude: treasure.latitude,
        longitude: treasure.longitude,
        name: treasure.name,
      });
      if (result && result.id) {
        await MoneyValueRepository.create({ treasureId: result.id, amount: 10 });
        await MoneyValueRepository.create({ treasureId: result.id, amount: 20 });
        await MoneyValueRepository.create({ treasureId: result.id, amount: 30 });
      }
    }
  }

  public static async down() {
    await TreasureRepository.deleteAll();
    await MoneyValueRepository.deleteAll();
    return
  }
}
