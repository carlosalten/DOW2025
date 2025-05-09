export default function PanelCarrito({ carrito, removeJuegoCarrito, add1Juego, remove1Juego }) {
	const totalCarrito = () => carrito.reduce((total, juego) => total + juego.precio * juego.cantidad, 0)
	return (
		<div className="offcanvas offcanvas-end" tabIndex="-1" id="ocCarrito" aria-labelledby="offcanvasExampleLabel">
			<div className="offcanvas-header">
				<h5 className="offcanvas-title">Carrito</h5>
				<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div className="offcanvas-body">
				{carrito.length === 0 ? (
					<div className="alert alert-primary">El carrito está vacío.</div>
				) : (
					<>
						<div className="table-responsive">
							<table className="table table-sm table-bordered table-hover">
								<thead className="table-primary">
									<tr>
										<th scope="col">Nº</th>
										<th scope="col">Juego</th>
										<th scope="col">Precio</th>
										<th scope="col">Cant.</th>
										<th scope="col"></th>
									</tr>
								</thead>
								<tbody>
									{carrito.map((juego, index) => (
										<tr key={juego.id}>
											<td className="text-center">{index + 1}</td>
											<td>{juego.nombre}</td>
											<td>${juego.precio.toLocaleString('es-ES')}</td>
											<td className="text-center">{juego.cantidad}</td>
											<td className="text-center">
												<button
													type="button"
													className="btn btn-sm btn-outline-info me-1"
													onClick={() => remove1Juego(juego.id)}
												>
													-
												</button>
												<button
													type="button"
													className="btn btn-sm btn-outline-info me-1"
													onClick={() => add1Juego(juego.id)}
												>
													+
												</button>
												<button
													type="button"
													className="btn btn-sm btn-danger"
													onClick={() => removeJuegoCarrito(juego)}
												>
													X
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						<div className="alert alert-light text-end">
							<span className="fw-bold">Total:</span> ${totalCarrito().toLocaleString('es-ES')}
						</div>
					</>
				)}
			</div>
		</div>
	)
}
