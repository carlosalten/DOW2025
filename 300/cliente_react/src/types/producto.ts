import { array, number, object, string, type InferOutput } from 'valibot'

//Categoria que solo tiene nombre
export const CategoriaSimpleSchema = object({
	nombre: string(),
})

//Schema que se utiliza en la página que lista productos
export const ProductoConCategoriaSchema = object({
	codProducto: string(),
	nombre: string(),
	precio: number(),
	stock: number(),
	categoria: CategoriaSimpleSchema,
})

export const ProductosConCategoriaSchema = array(ProductoConCategoriaSchema)

//Types
export type ProductoConCategoria = InferOutput<typeof ProductoConCategoriaSchema>
