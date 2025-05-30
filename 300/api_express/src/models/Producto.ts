import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table({ tableName: 'productos' })
class Producto extends Model {
	@Column({ type: DataType.STRING(50) })
	declare nombre: string

	@Column({ type: DataType.INTEGER })
	declare precio: number

	@Column({ type: DataType.INTEGER })
	declare stock: number
}

export default Producto
