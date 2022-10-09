import { DECIMAL, INTEGER, Model, STRING } from 'sequelize'
import db from '.'

class Signature extends Model {
  id!: number
  userId!: string
  productId!: number
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
      type: STRING,
      allowNull: false,
    },
    productId: {
      type: DECIMAL(10, 2),
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
