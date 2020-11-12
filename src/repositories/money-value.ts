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
      treasure_id: treasureId,
      amount,
      isCollected: false,
    });
  }

  public async deleteAll(): Promise<number> {
    return MoneyValue.destroy({where: {}});
  }
}

export default new MoneyValueRepository();
