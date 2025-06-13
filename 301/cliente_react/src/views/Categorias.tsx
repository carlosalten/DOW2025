export default function Categorias() {
	return (
		<>
			<h2>Categorías</h2>
			<div className="row">
				<div className="col-8">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="#">Inicio</a>
							</li>
							<li className="breadcrumb-item active" aria-current="page">
								Categorías
							</li>
						</ol>
					</nav>
				</div>
				<div className="col-4 text-end">
					<button className="btn btn-primary">Crear Categoría</button>
				</div>
			</div>
			<div className="table-responsive">
				<table className="table table-bordered table-striped table-hover">
					<thead className="table-dark">
						<tr>
							<th>Nº</th>
							<th>Nombre</th>
							<th>Cantidad Productos</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="text-center">1</td>
							<td>Computadores</td>
							<td className="text-end">5</td>
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
						<tr>
							<td className="text-center">2</td>
							<td>Tablets</td>
							<td className="text-end">5</td>
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
					</tbody>
				</table>
			</div>
		</>
	)
}
