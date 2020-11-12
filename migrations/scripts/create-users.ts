import fs from 'fs';
import { UserInterface } from '../../src/config/interfaces';

const jsonData = require('../../src/seed-data/users.json');
import UserRepository from '../../src/repositories/user';

export class CreateUserMigrations {
  public static async up() {
    const users: UserInterface[] = jsonData;
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
