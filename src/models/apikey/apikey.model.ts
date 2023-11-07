import { model, Schema } from 'mongoose'

export enum PERMISSION {
  ROLE_1 = '0000',
  ROLE_2 = '1111',
  ROLE_3 = '2222'
}
export interface IApiKey {
  key: Schema.Types.String
  status: Schema.Types.Boolean
  permissions: [PERMISSION]
}

const DOCUMENT_NAME = 'Apikey'
const COLLECTION_NAME = 'Apikeys'

const apiKeySchema = new Schema<IApiKey>(
  {
    key: {
      type: Schema.Types.String,
      required: true,
      unique: true
    },
    status: {
      type: Schema.Types.Boolean,
      default: true
    },
    permissions: {
      type: [PERMISSION],
      required: true,
      enum: ['0000', '1111', '2222']
    }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

export default model(DOCUMENT_NAME, apiKeySchema)
