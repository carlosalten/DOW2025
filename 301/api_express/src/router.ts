import { Router } from 'express'
import {
	borrarProducto,
	crearProducto,
	editarProducto,
	getProductoByCodigo,
	getProductos,
	getProductosConCategoria,
	getProductosStockBajo,
} from './handlers/productos'
import {
	borrarCategoria,
	crearCategoria,
	editarCategoria,
	getCategoriaById,
	getCategorias,
	getCategoriasConCantidadProductos,
} from './handlers/categorias'

const router = Router()

//Categorias
router.get('/categorias', getCategorias)
router.get('/categorias/con-cantidad-productos', getCategoriasConCantidadProductos)
router.get('/categorias/:id', getCategoriaById)
router.post('/categorias/', crearCategoria)
router.put('/categorias/:id', editarCategoria)
router.delete('/categorias/:id', borrarCategoria)

//Productos
router.get('/productos', getProductos)
router.get('/productos/con-categoria', getProductosConCategoria)
router.get('/productos/stock-bajo', getProductosStockBajo)
router.get('/productos/:codigo', getProductoByCodigo)
router.post('/productos', crearProducto)
router.put('/productos/:codigo', editarProducto)
router.delete('/productos/:codigo', borrarProducto)

export default router
