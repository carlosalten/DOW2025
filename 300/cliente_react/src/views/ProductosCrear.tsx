import { Form, Link, redirect, useLoaderData, type ActionFunctionArgs } from 'react-router-dom'
import { getCategorias } from '../services/CategoriaService'
import type { Categoria } from '../types/categoria'
import { productoCrear } from '../services/ProductoService'

export async function action({ request }: ActionFunctionArgs) {
	const formData = Object.fromEntries(await request.formData())
	const resultado = await productoCrear(formData)
	if (!resultado?.success) {
		return resultado
	}
	return redirect('/productos')
}

export async function loader() {
	const categorias = getCategorias()
	return categorias
}

export default function ProductosCrear() {
	const categorias = useLoaderData() as Categoria[]
	return (
		<>
			<h2>Crear Producto</h2>
			<div className="row">
				<div className="col-8">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="#">Inicio</a>
							</li>
							<li className="breadcrumb-item">
								<a href="#">Productos</a>
							</li>
							<li className="breadcrumb-item active" aria-current="page">
								Agregar Producto
							</li>
						</ol>
					</nav>
				</div>
				<div className="col-4 text-end">
					<Link to="/productos" className="btn btn-sm btn-secondary">
						Volver a Productos
					</Link>
				</div>
			</div>
			<div className="card">
				<div className="card-body">
					<Form method="POST">
						<div className="mb-3">
							<label className="form-label" htmlFor="codProducto">
								Código
							</label>
							<input type="text" className="form-control" id="codProducto" name="codProducto" />
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="nombre">
								Nombre
							</label>
							<input type="text" className="form-control" id="nombre" name="nombre" />
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="precio">
								Precio
							</label>
							<input type="number" className="form-control" id="precio" name="precio" min="1000" />
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="stock">
								Stock
							</label>
							<input type="number" className="form-control" id="stock" name="stock" min="0" />
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="categoriaId">
								Categoría
							</label>
							<select className="form-select" id="categoriaId" name="categoriaId">
								<option value="0">Seleccione una Categoría</option>
								{categorias.map(categoria => (
									<option key={categoria.id} value={categoria.id}>
										{categoria.nombre}
									</option>
								))}
							</select>
						</div>
						<div className="mb-3 text-end">
							<button type="reset" className="btn btn-warning me-1">
								Restablecer
							</button>
							<button type="submit" className="btn btn-primary">
								Agregar Producto
							</button>
						</div>
					</Form>
				</div>
			</div>
		</>
	)
}
