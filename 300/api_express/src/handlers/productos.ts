import { Request, Response } from "express";

//Retorna la lista de productos
export const getProductos = async (request: Request,response: Response)=>{
    response.json("Lista de productos")
}

//Retorna los datos de 1 producto en particular
export const getProductoById = async (request: Request,response: Response)=>{
    const {id} = request.params
    response.json("Detalle de producto "+id)
}

//Inserta un nuevo producto en la BD
export const crearProducto = async (request:Request,response:Response)=>{
    response.json("Crear producto")
}

//Edita 1 o más campos de un producto
export const editarProducto = async (request:Request,response:Response)=>{
    const {id} = request.params
    response.json("Modificar el producto "+id)
}

//Borra un producto de la BD
export const borrarProducto = async (request:Request,response:Response)=>{
    const {id} = request.params
    response.json("Borrar el producto "+id)
}