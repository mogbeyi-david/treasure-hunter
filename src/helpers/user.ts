import { UserModel } from '../models/user';

export function removeUserPassword(user: UserModel) {
  let result: { [key: string]: string } = {};
  Object.entries(user).forEach(([key, value]) => {
    if (key === 'password') {
    } else {
      result[key] = value;
    }
  });
  return result;
}
