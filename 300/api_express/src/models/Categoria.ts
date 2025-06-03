import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript'
import Producto from './Producto'

@Table({ tableName: 'categorias' })
class Categoria extends Model {
	@Column({ type: DataType.STRING(50) })
	declare nombre: string

	@HasMany(() => Producto)
	declare productos: Producto[]
}

export default Categoria
