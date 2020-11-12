import { runMigration } from './runMigration';
import { generateRandomString } from '../src/util/generate-random-string';
import { CreateUserMigrations } from './scripts/create-users';

async function main(): Promise<void> {
  await runMigration({
    uuid: 'dduyeujdhejdhejdehjdabhjabdakdb',
    title: 'Create Users - Reverse',
    description: 'Run migrations to delete users',
    func: CreateUserMigrations.down,
  });

  process.exit();
}

main();
