import { Link } from 'react-router-dom'

export default function ProductosCrear() {
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
					<form>
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
								<option selected>Seleccione una Categoría</option>
								<option value="1">Computadores</option>
								<option value="2">Tablets</option>
								<option value="3">Smartphones</option>
								<option value="3">Accesorios</option>
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
					</form>
				</div>
			</div>
		</>
	)
}
