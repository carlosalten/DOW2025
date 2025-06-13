import { array, number, object, string, type InferOutput } from 'valibot'

//Los schema se utilizan en tiempo de ejecución para validar la data recibida
export const CategoriaSchema = object({
	id: number(),
	nombre: string(),
})

export const CategoriaConCantidadProductosSchema = object({
	id: number(),
	nombre: string(),
	cantidadProductos: number(),
})

export const CategoriasSchema = array(CategoriaSchema)
export const CategoriasConCantidadProductosSchema = array(CategoriaConCantidadProductosSchema)

//Los tipos se usan en modo de programación para validación de errores
export type Categoria = InferOutput<typeof CategoriaSchema>
export type CategoriaConCantidadProductos = InferOutput<typeof CategoriaConCantidadProductosSchema>
