import { asClass, AwilixContainer, Lifetime } from 'awilix'
import path from 'path'

type ModelLoaderParams = {
  container: AwilixContainer
}

export default async ({ container }: ModelLoaderParams) => {
  container.loadModules(
    [
      [
        path.join(__dirname, '..', 'services/**/*.ts'),
        {
          register: asClass,
          lifetime: Lifetime.SINGLETON
        }
      ]
    ],
    {
      formatName: 'camelCase',
      resolverOptions: {
        lifetime: Lifetime.SINGLETON,
        register: asClass
      }
    }
  )
}
