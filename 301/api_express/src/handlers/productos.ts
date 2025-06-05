import { Request, Response } from 'express'
import Producto from '../models/Producto'
import Categoria from '../models/Categoria'

export const getProductos = async (request: Request, response: Response) => {
	// response.json('Lista de Productos')
	// const productos = await Producto.findAll()
	const productos = await Producto.findAll({
		order: [
			['nombre', 'ASC'],
			['precio', 'DESC'],
		],
	})
	response.json({ data: productos })
}

export const getProductoByCodigo = async (request: Request, response: Response) => {
	const { codigo } = request.params
	// const producto = await Producto.findByPk(codigo)
	const producto = await Producto.findByPk(codigo, { include: [{ model: Categoria, attributes: ['nombre'] }] })
	response.json({ data: producto })
}

export const createProducto = async (request: Request, response: Response) => {
	const productoNuevo = await Producto.create(request.body)
	response.json({ data: productoNuevo })
}

export const updateProducto = async (request: Request, response: Response) => {
	const { codigo } = request.params
	const producto = await Producto.findByPk(codigo)
	await producto.update(request.body)
	await producto.save()
	response.json({ data: producto })
}

export const deleteProducto = async (request: Request, response: Response) => {
	const { codigo } = request.params
	const producto = await Producto.findByPk(codigo)
	await producto.destroy()
	response.json({ data: 'Producto borrado' })
}
