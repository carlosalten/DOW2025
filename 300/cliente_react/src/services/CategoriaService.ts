import axios from 'axios'
import { safeParse } from 'valibot'
import { CategoriaFormSchema, CategoriasConCantidadProductosSchema, CategoriasSchema } from '../types/categoria'

export async function getCategorias() {
	try {
		// const url = 'http://localhost:3000/api/categorias'
		const url = `${import.meta.env.VITE_API_URL}/categorias`
		const { data: categorias } = await axios.get(url)
		const resultado = safeParse(CategoriasSchema, categorias.data)
		// console.log(resultado)
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

export async function getCategoriasConCantidadProductos() {
	try {
		const url = `${import.meta.env.VITE_API_URL}/categorias/con-cantidad-productos`
		const { data: categorias } = await axios.get(url)
		const resultado = safeParse(CategoriasConCantidadProductosSchema, categorias.data)
		// console.log(resultado)
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

//crear una categoría
type CategoriaFormData = {
	[k: string]: FormDataEntryValue
}
export async function categoriaCrear(dataForm: CategoriaFormData) {
	try {
		const resultado = safeParse(CategoriaFormSchema, dataForm)
		if (resultado.success) {
			//datos de form ok, enviar al API
			const url = `${import.meta.env.VITE_API_URL}/categorias`
			await axios.post(url, {
				nombre: resultado.output.nombre,
			})
			return { success: true }
		} else {
			// throw new Error('Datos de formulario no válidos')
			return { success: false, error: 'Datos de formulario no válidos' }
		}
	} catch (error) {
		console.log(error)
	}
}
