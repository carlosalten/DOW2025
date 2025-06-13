import { array, number, object, string, type InferOutput } from 'valibot'

//Schemas
export const CategoriaSchema = object({
	id: number(),
	nombre: string(),
})

export const CategoriasSchema = array(CategoriaSchema)

//Types
export type Categoria = InferOutput<typeof CategoriaSchema>
