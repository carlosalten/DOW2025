import { array, number, object, string, type InferOutput } from 'valibot'

//Schemas
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

//Types
export type Categoria = InferOutput<typeof CategoriaSchema>
export type CategoriaConCantidadProductos = InferOutput<typeof CategoriaConCantidadProductosSchema>
