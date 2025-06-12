import { Request, Response } from 'express'
import Producto from '../models/Producto'
import Categoria from '../models/Categoria'
import { Op } from 'sequelize'

//Retorna la lista de productos
export const getProductos = async (request: Request, response: Response) => {
	// response.json("Lista de productos")
	// const productos = await Producto.findAll()
	const productos = await Producto.findAll({
		order: [
			['nombre', 'ASC'],
			['precio', 'DESC'],
		], //ordena por nombre ASC y luego por precio DESC
	})
	response.json({ data: productos })
}

//Retorna la lista de productos incluyendo su categoria
export const getProductosConCategoria = async (request: Request, response: Response) => {
	// response.json("Lista de productos")
	// const productos = await Producto.findAll()
	const productos = await Producto.findAll({
		attributes: { exclude: ['categoriaId'] }, //no incluir el dato categoriaId
		order: [
			['nombre', 'ASC'],
			['precio', 'DESC'],
		], //ordena por nombre ASC y luego por precio DESC
		include: [
			{
				model: Categoria,
				attributes: ['nombre'],
			}, //incluir nombre de la categoría
		],
	})
	response.json({ data: productos })
}

//Retorna los datos de 1 producto en particular (según su código de producto)
export const getProductoByCodigo = async (request: Request, response: Response) => {
	const { codigo } = request.params
	// const producto = await Producto.findByPk(codigo)
	const producto = await Producto.findByPk(codigo)
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

//Ejemplo de uso de WHERE
//Obtiene solo los productos que están bajo stock (bajo el umbral)
//Utiliza Op (importado arriba). Op permite usar lte (less than or equal)
//Con Op pueden hacer querys que usen menor que, menor o igual, mayor que, etc.
export const getProductosStockBajo = async (request: Request, response: Response) => {
	const UMBRAL_BAJO_STOCK = 10
	const productos = await Producto.findAll({
		where: {
			stock: {
				[Op.lte]: UMBRAL_BAJO_STOCK, // Stock menor o igual a 5
			},
		},
		order: [
			['nombre', 'ASC'],
			['precio', 'DESC'],
		], // Ordena por nombre, en caso de empate en el nombre, ordena por precio DESC
		include: [
			{
				model: Categoria,
				attributes: ['nombre'],
			}, // Incluye el nombre de la categoria del producto
		],
	})
	response.json({ data: productos })
}
