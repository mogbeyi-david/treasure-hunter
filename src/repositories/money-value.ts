import { MoneyValue } from '../models';
import { MoneyValueModel } from '../models/money-value';

class MoneyValueRepository {
  public async create({
    treasureId,
    amount,
  }: {
    treasureId: number;
    amount: number;
  }): Promise<MoneyValueModel> {
    return MoneyValue.create({
      treasureId,
      amount,
      isCollected: false,
    });
  }
}

export default new MoneyValueRepository()
