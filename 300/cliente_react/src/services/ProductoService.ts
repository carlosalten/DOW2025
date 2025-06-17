import axios from 'axios'
import { safeParse } from 'valibot'
import { ProductosConCategoriaSchema } from '../types/producto'

export async function getProductosConCategoria() {
	try {
		const url = `${import.meta.env.VITE_API_URL}/productos/con-categoria`
		const { data: productos } = await axios.get(url)
		const resultado = safeParse(ProductosConCategoriaSchema, productos.data)
		if (resultado.success) {
			//los datos que me entregó el API están ok.
			return resultado.output
		} else {
			throw new Error('Hubo un problema.')
		}
	} catch (error) {
		console.log(error)
	}
}
