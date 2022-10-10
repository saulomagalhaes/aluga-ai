import { INTEGER, Model, STRING } from 'sequelize'
import db from '.'

class Signature extends Model {
  id!: number
  userId!: string
  productId!: number
  createdAt!: Date
  updatedAt!: Date
  imgUrl!: string
}

Signature.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: INTEGER,
      allowNull: false,
    },
    productId: {
      type: INTEGER,
      allowNull: false,
    },
    imgUrl: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'signatures',
    timestamps: true,
    underscored: true,
  }
)

export default Signature
