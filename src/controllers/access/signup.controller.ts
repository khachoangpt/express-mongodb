import { Request, Response } from 'express'

import AccessService from '@/services/access/access.service'

export default async (req: Request, res: Response) => {
  const accessService: AccessService = req.scope.resolve('accessService')

  const email = req.body.email
  const password = req.body.password

  const result = await accessService.signUp(email, password)

  res.status(200).json(result)
}
