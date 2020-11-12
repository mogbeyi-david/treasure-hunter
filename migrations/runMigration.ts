import { Migration } from '../src/models';
import { logger } from '../src/util/logger';

/**
 * Runs a given DB migration function and stores the function's id and details
 *
 * @param {({
 *   uuid: string;
 *   title: string;
 *   description: string;
 *   func: () => object | symbol | string | number;
 *   disabled: boolean;
 * })} {
 *   id,
 *   title,
 *   description,
 *   func,
 *   disabled,
 * }
 * @returns
 */
export async function runMigration({
  uuid,
  title,
  description,
  func,
  disabled,
  unique = true,
}: {
  uuid: string;
  title: string;
  description: string;
  func: () => object | symbol | string | number | void;
  disabled?: boolean;
  /**
   * If true, the migration would stop if it has already run before.
   *
   * @type {boolean}
   */
  unique?: boolean;
}): Promise<void> {
  if (disabled) {
    return;
  }

  logger.info(
    `Running migration...:\nid: ${uuid}\ntitle: ${title}\ndescription: ${description}`,
  );

  const migration = await Migration.findOne({ where: { uuid } });
  if (migration) {
    //@ts-ignore
    migration.runCount = migration.runCount + 1;
    migration.lastRun = new Date();
    await migration.save();
  }

  try {
    const op = await func();
    await Migration.create({ uuid, title, description })
      .then(() => {
        logger.info('Migration successful and saved');
        logger.info(`Output:\n ${JSON.stringify(op)}`);
      })
      .catch((error) => {
        logger.error('Migration successful but not saved', error);
      });
  } catch (error) {
    logger.error({ errorMessage: 'Migration failed', error });
  }
}
