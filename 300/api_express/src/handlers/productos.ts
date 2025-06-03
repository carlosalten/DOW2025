import { Request, Response } from 'express'
import Producto from '../models/Producto'
import Categoria from '../models/Categoria'

//Retorna la lista de productos
export const getProductos = async (request: Request, response: Response) => {
	// response.json("Lista de productos")
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

//Retorna los datos de 1 producto en particular
export const getProductoByCodigo = async (request: Request, response: Response) => {
	const { codigo } = request.params
	// const producto = await Producto.findByPk(codigo)
	const producto = await Producto.findByPk(codigo, { include: [{ model: Categoria }] })
	response.json({ data: producto })
}

//Inserta un nuevo producto en la BD
export const crearProducto = async (request: Request, response: Response) => {
	const productoNuevo = await Producto.create(request.body)
	response.json({ data: productoNuevo })
}

//Edita 1 o más campos de un producto
export const editarProducto = async (request: Request, response: Response) => {
	const { codigo } = request.params
	const producto = await Producto.findByPk(codigo)
	await producto.update(request.body)
	await producto.save()
	response.json({ data: producto })
}

//Borra un producto de la BD
export const borrarProducto = async (request: Request, response: Response) => {
	const { codigo } = request.params
	const producto = await Producto.findByPk(codigo)
	await producto.destroy()
	response.json({ data: 'Producto borrado' })
}
