import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, getProductoById, getProductos } from "./handlers/productos";

const router = Router()

router.get('/productos',getProductos)
router.get('/productos/:id',getProductoById)
router.post('/productos',crearProducto)
router.put('/productos/:id',editarProducto)
router.delete('/productos/:id',borrarProducto)

export default router