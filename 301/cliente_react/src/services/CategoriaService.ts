import axios from 'axios'
import { safeParse } from 'valibot'
import { CategoriasConCantidadProductosSchema, CategoriasSchema } from '../types/categoria'

export async function getCategorias() {
	try {
		// const url = 'http://localhost:3000/api/categorias'
		const url = `${import.meta.env.VITE_API_URL}/categorias`
		const { data: categorias } = await axios.get(url)
		const resultado = safeParse(CategoriasSchema, categorias.data)
		// console.log(resultado)
		if (resultado.success) {
			//datos ok, pasarlos a la página para que los muestre
			return resultado.output
		} else {
			throw new Error('Hay un problema')
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
			//datos ok, pasarlos a la página para que los muestre
			return resultado.output
		} else {
			throw new Error('Hay un problema')
		}
	} catch (error) {
		console.log(error)
	}
}
