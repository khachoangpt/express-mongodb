import express, { Express } from 'express'

import { PERMISSION } from '@/models/apikey/apikey.model'
import { apiKey, permissions } from '@/utils/check-auth'

import accessRoutes from './access/access.routes'

export default (app: Express) => {
  const router = express.Router()

  // check api
  router.use(apiKey)
  // check permission
  router.use(permissions(PERMISSION.ROLE_1))

  app.use('/v1/api', router)

  accessRoutes(router)

  return router
}
