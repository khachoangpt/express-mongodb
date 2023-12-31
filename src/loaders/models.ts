import { asFunction, AwilixContainer, Lifetime } from 'awilix'
import path from 'path'

type ModelLoaderParams = {
  container: AwilixContainer
}

export default async ({ container }: ModelLoaderParams) => {
  container.loadModules(
    [
      [
        path.join(__dirname, '..', 'models/**/*.ts'),
        {
          register: asFunction,
          lifetime: Lifetime.SINGLETON
        }
      ]
    ],
    {
      formatName: 'camelCase',
      resolverOptions: {
        lifetime: Lifetime.SINGLETON,
        register: asFunction
      }
    }
  )
}
