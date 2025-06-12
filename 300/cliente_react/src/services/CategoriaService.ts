import axios from 'axios'
import { safeParse } from 'valibot'
import { CategoriasSchema } from '../types/categoria'

export async function getCategorias() {
	try {
		const url = 'http://localhost:3000/api/categorias'
		const { data: categorias } = await axios.get(url)
		const resultado = safeParse(CategoriasSchema, categorias.data)
		if (resultado.success) {
			//los datos que me entregó el API están ok.
			resultado.output
		} else {
			throw new Error('Hubo un problema.')
		}
	} catch (error) {
		console.log(error)
	}
}
