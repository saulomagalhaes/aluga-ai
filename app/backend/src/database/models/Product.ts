import { DECIMAL, INTEGER, Model, STRING } from 'sequelize'
import db from '.'
import Signature from './Signature'

class Product extends Model {
  id!: number
  name!: string
  price!: number
  img!: string
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
    img: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'products',
    timestamps: false,
  }
)

Product.hasMany(Signature, { foreignKey: 'product_id', as: 'signatures' })
Signature.belongsTo(Product, { foreignKey: 'product_id', as: 'product' })

export default Product
