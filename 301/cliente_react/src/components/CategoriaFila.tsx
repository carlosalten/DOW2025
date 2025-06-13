import type { CategoriaConCantidadProductos } from '../types/categoria'

type CategoriaFilaProps = {
	index: number
	categoria: CategoriaConCantidadProductos
}

export default function CategoriaFila({ index, categoria }: CategoriaFilaProps) {
	return (
		<tr>
			<td className="text-center">{index + 1}</td>
			<td>{categoria.nombre}</td>
			<td className="text-end">{categoria.cantidadProductos}</td>
			<td className="text-center">
				<button className="btn btn-sm btn-info">
					<i className="bi bi-info-circle"></i>
				</button>
				<button className="btn btn-sm btn-warning mx-1">
					<i className="bi bi-pencil-square"></i>
				</button>
				<button className="btn btn-sm btn-danger">
					<i className="bi bi-trash3"></i>
				</button>
			</td>
		</tr>
	)
}
