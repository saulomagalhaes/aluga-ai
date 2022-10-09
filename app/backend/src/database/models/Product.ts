import { DECIMAL, INTEGER, Model, STRING } from 'sequelize'
import db from '.'

class Product extends Model {
  id!: number
  name!: string
  price!: number
}

Product.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    price: {
      type: DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'products',
    timestamps: false,
  }
)

export default Product
