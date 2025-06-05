import { Router } from 'express'
import { createProducto, deleteProducto, getProductoByCodigo, getProductos, updateProducto } from './handlers/productos'

const router = Router()

router.get('/productos', getProductos)
router.get('/productos/:codigo', getProductoByCodigo)
router.post('/productos', createProducto)
router.put('/productos/:codigo', updateProducto)
router.delete('/productos/:codigo', deleteProducto)

export default router
