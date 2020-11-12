import { User } from '../models';
import { UserModel } from '../models/user';
import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from '../config/env';

class UserRepository {
  public async getByEmail(email: string): Promise<UserModel | null> {
    return User.findOne({ where: { email } });
  }

  public async create({
    name,
    age,
    email,
    password,
  }: {
    name: string;
    age: number;
    email: string;
    password: string;
  }): Promise<UserModel> {
    const salt = await bcrypt.genSalt(parseInt(SALT_ROUNDS));
    const hashedPassword = await bcrypt.hash(password, salt);
    return await User.create({ name, age, email, password: hashedPassword });
  }

  public async deleteAll(): Promise<number> {
    return User.destroy({where: {}});
  }
}

export default new UserRepository();
