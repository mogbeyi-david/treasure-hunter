import { runMigration } from './runMigration';
import { generateRandomString } from '../src/util/generate-random-string';
import { CreateUserMigrations } from './scripts/create-users';

async function main(): Promise<void> {
  await runMigration({
    id: generateRandomString(16),
    title: 'Create Users - Reverse',
    func: CreateUserMigrations.down,
  });

  process.exit();
}

main();
