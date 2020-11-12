import { runMigration } from './runMigration';
import { CreateUserMigrations } from './scripts/create-users';
import { CreateTreasuresMigrations } from './scripts/create-treasures';

async function main(): Promise<void> {
  await runMigration({
    uuid: 'dduyeujdhejdhejdehjdabhjabdakdb',
    title: 'Create Users - Reverse',
    description: 'Run migrations to delete users',
    func: CreateUserMigrations.down,
  });

  await runMigration({
    uuid: 'kjdasfljksagh;fjsegfhiegflsjhefgshjfgaler',
    title: 'Create Treasures and Money Values - Reverse',
    description: 'Run migrations to delete treasures and money values',
    func: CreateTreasuresMigrations.down,
  });

  process.exit();
}

main();
