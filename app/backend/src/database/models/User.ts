import { INTEGER, Model, STRING } from 'sequelize'
import db from '.'
import Signature from './Signature'
class User extends Model {
  id!: number
  name!: string
  email!: string
  password!: string
}

User.init(
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
    email: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'users',
    timestamps: false,
  }
)

User.hasMany(Signature, { foreignKey: 'user_id', as: 'signatures' })
Signature.belongsTo(User, { foreignKey: 'user_id', as: 'user' })

export default User
