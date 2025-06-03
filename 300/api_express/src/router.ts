import { Router } from 'express'
import { borrarProducto, crearProducto, editarProducto, getProductoByCodigo, getProductos } from './handlers/productos'

const router = Router()

router.get('/productos', getProductos)
router.get('/productos/:codigo', getProductoByCodigo)
router.post('/productos', crearProducto)
router.put('/productos/:codigo', editarProducto)
router.delete('/productos/:codigo', borrarProducto)

export default router
