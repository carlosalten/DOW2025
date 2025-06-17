import axios from 'axios'
import { safeParse } from 'valibot'
import { ProductoFormSchema, ProductosConCategoriaSchema } from '../types/producto'

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

//crear un producto
type ProductoFormData = {
	[k: string]: FormDataEntryValue
}
export async function productoCrear(dataForm: ProductoFormData) {
	try {
		const resultado = safeParse(ProductoFormSchema, dataForm)
		console.log(resultado)
		if (resultado.success) {
			//datos de form ok, enviar al API
			const url = `${import.meta.env.VITE_API_URL}/productos`
			await axios.post(url, resultado.output)
			return { success: true }
		} else {
			// throw new Error('Datos de formulario no válidos')
			return { success: false, error: 'Datos de formulario no válidos' }
		}
	} catch (error) {
		console.log(error)
	}
}
