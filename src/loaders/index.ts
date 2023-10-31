import { logger } from '@/configs/logger'
import databaseLoader from '@/loaders/database'

export default async () => {
  logger.info(`Start Database Loader`)
  await databaseLoader()
  logger.info(`Success Database Loader`)
}
