import _ from 'lodash'

export const getInfoData = <T>({ fields, object }: { fields: string[]; object: T }) => {
  return _.pick(object, fields)
}
