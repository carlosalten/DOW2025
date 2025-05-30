import { Request, Response } from 'express'
import Producto from '../models/Producto'

export const getProductos = async (request: Request, response: Response) => {
	// response.json('Lista de Productos')
	// const productos = await Producto.findAll()
	const productos = await Producto.findAll({
		order: [
			['nombre', 'ASC'],
			['precio', 'DESC'],
		],
		attributes: { exclude: ['createdAt', 'updatedAt'] },
	})
	response.json({ data: productos })
}

export const getProductoById = async (request: Request, response: Response) => {
	const { id } = request.params
	response.json('Detalle de producto: ' + id)
}

export const createProducto = async (request: Request, response: Response) => {
	response.json('Crear un producto')
}

export const updateProducto = async (request: Request, response: Response) => {
	const { id } = request.params
	response.json('Modificar el producto: ' + id)
}

export const deleteProducto = async (request: Request, response: Response) => {
	const { id } = request.params
	response.json('Borrar el producto: ' + id)
}
