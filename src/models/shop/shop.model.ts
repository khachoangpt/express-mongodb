import { model, Schema } from 'mongoose'

const DOCUMENT_NAME = 'Shop'
const COLLECTION_NAME = 'Shops'

const shopSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      trim: true,
      maxLength: 150
    },
    email: {
      type: Schema.Types.String,
      unique: true,
      trim: true
    },
    password: {
      type: Schema.Types.String,
      require: true
    },
    status: {
      type: Schema.Types.String,
      enum: ['active', 'inactive'],
      default: 'inactive'
    },
    verify: {
      type: Schema.Types.Boolean,
      default: false
    },
    roles: {
      type: Schema.Types.Array,
      default: []
    }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

//Export the model
export default model(DOCUMENT_NAME, shopSchema)
