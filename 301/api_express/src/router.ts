import { Router } from 'express'
import { createProducto, deleteProducto, getProductoById, getProductos, updateProducto } from './handlers/productos'

const router = Router()

router.get('/productos', getProductos)
router.get('/productos/:id', getProductoById)
router.post('/productos', createProducto)
router.put('/productos/:id', updateProducto)
router.delete('/productos/:id', deleteProducto)

export default router
