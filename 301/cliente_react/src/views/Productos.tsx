export default function Productos() {
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
					<button className="btn btn-primary">Crear Producto</button>
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
						<tr>
							<td className="text-center">1</td>
							<td>Laptop Gaming Ryzen 7</td>
							<td className="text-end">$1.200.000</td>
							<td className="text-end">10</td>
							<td>Computadores</td>
							<td className="text-center">
								<button className="btn btn-sm btn-warning me-1">
									<i className="bi bi-pencil-square"></i>
								</button>
								<button className="btn btn-sm btn-danger">
									<i className="bi bi-trash3"></i>
								</button>
							</td>
						</tr>
						<tr>
							<td className="text-center">2</td>
							<td>Desktop Intel i9</td>
							<td className="text-end">$1.500.000</td>
							<td className="text-end">8</td>
							<td>Computadores</td>
							<td className="text-center">
								<button className="btn btn-sm btn-warning me-1">
									<i className="bi bi-pencil-square"></i>
								</button>
								<button className="btn btn-sm btn-danger">
									<i className="bi bi-trash3"></i>
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}
