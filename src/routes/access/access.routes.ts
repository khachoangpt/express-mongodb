import { Router } from 'express'

import signupController from '@/controllers/access/signup.controller'

const router = Router()

export default (app: Router) => {
  app.use('/', router)

  router.post('/signup', signupController)

  return router
}
