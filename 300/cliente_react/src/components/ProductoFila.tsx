import type { ProductoConCategoria } from '../types/producto'

type ProductoFilaProps = {
	index: number
	producto: ProductoConCategoria
}

export default function ProductoFila({ index, producto }: ProductoFilaProps) {
	return (
		<tr>
			<td className="text-center">{index + 1}</td>
			<td>{producto.nombre}</td>
			<td className="text-end">${producto.precio.toLocaleString('es-ES')}</td>
			<td className="text-end">{producto.stock}</td>
			<td>{producto.categoria.nombre}</td>
			<td className="text-center">
				<button className="btn btn-sm btn-warning me-1">
					<i className="bi bi-pencil-square"></i>
				</button>
				<button className="btn btn-sm btn-danger">
					<i className="bi bi-trash3"></i>
				</button>
			</td>
		</tr>
	)
}
