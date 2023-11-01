import express, { Express } from 'express'

import accessRoutes from './access/access.routes'

export default (app: Express) => {
  const router = express.Router()

  app.use('/v1/api', router)

  accessRoutes(router)

  return router
}
