import { array, number, object, pipe, string, transform, type InferOutput } from 'valibot'

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

//Schema para agregar producto
export const ProductoFormSchema = object({
	codProducto: string(),
	nombre: string(),
	precio: pipe(
		string(),
		transform((input: string) => Number(input)),
		number()
	),
	stock: pipe(
		string(),
		transform((input: string) => Number(input)),
		number()
	),
	categoriaId: pipe(
		string(),
		transform((input: string) => Number(input)),
		number()
	),
})

export const ProductosConCategoriaSchema = array(ProductoConCategoriaSchema)

//Types
export type ProductoConCategoria = InferOutput<typeof ProductoConCategoriaSchema>
