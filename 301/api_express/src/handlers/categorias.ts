import { Request, Response } from 'express'
import Producto from '../models/Producto'
import Categoria from '../models/Categoria'
import { Sequelize } from 'sequelize'

//Obtiene solo id y nombre de categoría, ordenadas por nombre
//Se usa para poner las categorías en el combo de agregar producto
export const getCategorias = async (request: Request, response: Response) => {
	const categorias = await Categoria.findAll({ order: [['nombre', 'ASC']] })
	response.json({ data: categorias })
}

//Obtener la lista de categorías.
//Por cada categoría incluir un campo 'cantidad_productos' que diga el número de productos que tiene la categoría
export const getCategoriasConCantidadProductos = async (request: Request, response: Response) => {
	const categorias = await Categoria.findAll({
		attributes: ['id', 'nombre', [Sequelize.fn('COUNT', Sequelize.col('productos.cod_producto')), 'cantidadProductos']], //el query solo debe tener campo id, nombre de categoría, y la cantidad de productos
		include: [
			{
				model: Producto,
				attributes: [], // Esto oculta todos los campos porque no necesitamos datos de productos, solo contarlos
				required: false, // LEFT JOIN para incluir categorías sin productos
			},
		],
		group: ['Categoria.id'], //agrupar por Id de categoría
		order: [['nombre', 'ASC']], //ordenar por nombre de categoría
	})
	response.json({ data: categorias })
}

//Obtener una categoría en base a su Id.
//Obtiene el id y nombre de la categoría y además la lista de productos en esa categoría
export const getCategoriaById = async (request: Request, response: Response) => {
	const { id } = request.params
	const categoria = await Categoria.findByPk(id, {
		include: [
			{
				model: Producto,
				attributes: ['nombre'], //queremos los datos de la categoría y sus productos (solo nombre)
				required: false,
			}, //incluir los productos de la categoría
		],
	})
	response.json({ data: categoria })
}

//Crear una categoría
export const crearCategoria = async (request: Request, response: Response) => {
	const categoriaNueva = await Categoria.create(request.body)
	response.json({ data: categoriaNueva })
}

//Editar una categoría
export const editarCategoria = async (request: Request, response: Response) => {
	const { id } = request.params
	const categoria = await Categoria.findByPk(id)
	await categoria.update(request.body)
	await categoria.save()
	response.json({ data: categoria })
}

//Borrar una categoría
export const borrarCategoria = async (request: Request, response: Response) => {
	const { id } = request.params
	const categoria = await Categoria.findByPk(id)
	await categoria.destroy()
	response.json({ data: 'Categoría borrada' })
}
