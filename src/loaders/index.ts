import { createContainer } from 'awilix'
import { Express, NextFunction, Request, Response } from 'express'

import { logger } from '@/configs/logger'
import apiLoader from '@/loaders/api'
import databaseLoader from '@/loaders/database'
import modelsLoader from '@/loaders/models'
import serviceLoader from '@/loaders/services'

export default async (app: Express) => {
  const container = createContainer()

  logger.info(`Start Database Loader`)
  await databaseLoader()
  logger.info(`Success Database Loader`)

  logger.info(`Start Models Loader`)
  await modelsLoader({ container })
  logger.info(`Success Models Loader`)

  // Add the registered services to the request scope
  app.use((req: Request, res: Response, next: NextFunction) => {
    req.scope = container.createScope()
    next()
  })

  logger.info(`Start Api Loader`)
  await apiLoader({ app })
  logger.info(`Success Api Loader`)

  logger.info(`Start Service Loader`)
  await serviceLoader({ container })
  logger.info(`Success Service Loader`)

  return { container }
}
