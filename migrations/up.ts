import { runMigration } from './runMigration';
import { CreateUserMigrations } from './scripts/create-users';
import { generateRandomString } from '../src/util/generate-random-string';

async function main(): Promise<void> {
  await runMigration({
    id: 'jkjlsdhflksjfsjkdbskfjhafjlbalkjdfgakfs',
    title: 'Create Users',
    description: 'Run migrations to create users',
    func: CreateUserMigrations.up,
  });

  process.exit();
}

main();
