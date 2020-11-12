import { UserInterface } from '../config/interfaces';
import { User } from '../models';
import { UserModel } from '../models/user';

class UserRepository {
  public async getByEmail(email: string): Promise<UserModel | null> {
    return User.findOne({ where: { email } });
  }
}

export default new UserRepository();
