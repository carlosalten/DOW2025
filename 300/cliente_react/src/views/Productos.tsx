import { Link, useLoaderData } from 'react-router-dom'
import { getProductosConCategoria } from '../services/ProductoService'
import type { ProductoConCategoria } from '../types/producto'
import ProductoFila from '../components/ProductoFila'

export async function loader() {
	const productos = await getProductosConCategoria()
	return productos
}

export default function Productos() {
	const productos = useLoaderData() as ProductoConCategoria[]
	return (
		<>
			<h2>Productos</h2>
			<div className="row">
				<div className="col-8">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="#">Inicio</a>
							</li>
							<li className="breadcrumb-item active" aria-current="page">
								Productos
							</li>
						</ol>
					</nav>
				</div>
				<div className="col-4 text-end">
					<Link to="/productos/crear" className="btn btn-primary">
						Crear Producto
					</Link>
				</div>
			</div>
			<div className="table-responsive">
				<table className="table table-bordered table-striped table-hover">
					<thead className="table-dark">
						<tr>
							<th>Nº</th>
							<th>Nombre</th>
							<th>Precio</th>
							<th>Stock</th>
							<th>Categoría</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{productos.map((producto, index) => (
							<ProductoFila key={producto.codProducto} index={index} producto={producto} />
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}
