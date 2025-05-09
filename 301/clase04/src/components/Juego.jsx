export default function Juego({ juego, addJuegoCarrito }) {
	return (
		<div className="col-12 col-md-6 col-lg-4 mb-2 d-flex align-items-stretch">
			<div className="card">
				<img src={`img/${juego.imagen}`} className="card-img-top" alt="Lego Jurassic World" />
				<div className="card-body d-flex flex-column">
					<h6 className="card-title">{juego.nombre}</h6>
					<p className="card-text flex-grow-1">{juego.descripcion}</p>
					<div className="row">
						<div className="col text-primary fw-bold">${juego.precio.toLocaleString('es-ES')}</div>
						<div className="col text-end">
							<button type="button" className="btn btn-sm btn-primary" onClick={() => addJuegoCarrito(juego)}>
								Agregar al Carrito
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
