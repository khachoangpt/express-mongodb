import mongoose from 'mongoose'

import { appConfig } from '@/configs/app-config'
import { logger } from '@/configs/logger'

export default async () => {
  try {
    await mongoose.connect(appConfig.db.DATABASE_CONNECTION)
    logger.info(`Connect Database Success`)
  } catch (error) {
    logger.error(`Error Database Connect`)
  }

  // dev
  if (appConfig.NODE_ENV === 'development') {
    mongoose.set('debug', true)
    mongoose.set('debug', { color: true })
  }
}
