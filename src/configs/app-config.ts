import dotenv from 'dotenv'

dotenv.config()

export const appConfig = {
  PORT: process.env.PORT ?? 8001,
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  db: {
    DATABASE_CONNECTION: process.env.DATABASE_CONNECTION ?? ''
  }
}
