import fs from 'fs';
import { TreasureInterface } from '../../src/config/interfaces';

const jsonData = require('../../src/seed-data/treasures.json');
import TreasureRepository from '../../src/repositories/treasure';

export class CreateTreasuresMigrations {
  public static async up() {
    const users: TreasureInterface[] = jsonData;
    console.log('users', users);
    for (const user of users) {
      await UserRepository.create({
        name: user.name,
        email: user.email,
        age: user.age,
        password: user.password,
      });
    }
  }

  public static async down() {
    return UserRepository.deleteAll();
  }
}
