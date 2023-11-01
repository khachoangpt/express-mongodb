import { createContainer } from 'awilix'
import { Express } from 'express'

import { logger } from '@/configs/logger'
import apiLoader from '@/loaders/api'
import databaseLoader from '@/loaders/database'
import modelsLoader from '@/loaders/models'

export default async (app: Express) => {
  const container = createContainer()

  logger.info(`Start Database Loader`)
  await databaseLoader()
  logger.info(`Success Database Loader`)

  logger.info(`Start Models Loader`)
  await modelsLoader({ container })
  logger.info(`Success Models Loader`)

  logger.info(`Start Api Loader`)
  await apiLoader({ app })
  logger.info(`Success Api Loader`)

  return { container }
}
