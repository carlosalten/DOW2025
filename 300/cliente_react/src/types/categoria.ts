import { array, number, object, string, type InferOutput } from 'valibot'

//Los schema se utilizan en tiempo de ejecución para validar la data recibida
export const CategoriaSchema = object({
	id: number(),
	nombre: string(),
})

export const CategoriasSchema = array(CategoriaSchema)

//Los tipos se usan en modo de programación para validación de errores
export type Categoria = InferOutput<typeof CategoriaSchema>
