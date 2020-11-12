import { runMigration } from './runMigration';
import { CreateUserMigrations } from './scripts/create-users';
import { CreateTreasuresMigrations } from './scripts/create-treasures';

async function main(): Promise<void> {
  await runMigration({
    uuid: 'jkjlsdhflksjfsjkdbskfjhafjlbalkjdfgakfs',
    title: 'Create Users',
    description: 'Run migrations to create users',
    func: CreateUserMigrations.up,
  });

  await runMigration({
    uuid: 'kadfakjsdfb,akjgdadhalskfhlvahflaebaej',
    title: 'Create Treasures and Money Values',
    description: 'Run migrations to create treasures and money values',
    func: CreateTreasuresMigrations.up,
  });

  process.exit();
}

main();
