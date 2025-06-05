//P:lo puede dejar como comentario?
//R:los modelos son siempre en singular.
import { Table, Column, DataType, Model, ForeignKey, BelongsTo } from 'sequelize-typescript'
import Categoria from './Categoria'

@Table({ tableName: 'productos' })
class Producto extends Model {
	@Column({ type: DataType.STRING(50), primaryKey: true, allowNull: false, field: 'cod_producto' })
	declare codProducto: string

	@Column({ type: DataType.STRING(50) })
	declare nombre: string

	@Column({ type: DataType.INTEGER })
	declare precio: number

	@Column({ type: DataType.INTEGER })
	declare stock: number

	@Column({ type: DataType.INTEGER, allowNull: false, field: 'categoria_id' })
	@ForeignKey(() => Categoria)
	declare categoriaId: number

	@BelongsTo(() => Categoria)
	declare categoria: Categoria
}

export default Producto
