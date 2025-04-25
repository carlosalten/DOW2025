import Juego from "./components/Juego"
import { juegos } from "./data/juegos"

function App() {
	return (
		<>
			<div className="container-fluid d-flex flex-column vh-100">
				{/* ENCABEZADO */}
				<header className="border-bottom pb-1 mb-2">
					<div className="row">
						<div className="col-10">
							<h1 className="text-danger">USM Juegos</h1>
							<span>Compra tus juegos online</span>
						</div>
						<div className="col-2 d-flex align-items-center justify-content-end pe-4">
							<button type="button" className="btn btn-sm btn-outline-primary position-relative" data-bs-toggle="offcanvas" data-bs-target="#ocCarrito">
								<i className="bi bi-cart3 fs-4"></i>
								<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
							</button>
						</div>
					</div>
				</header>

				{/* OFFCANVAS CARRITO */}
				<div className="offcanvas offcanvas-end" tabIndex="-1" id="ocCarrito" aria-labelledby="offcanvasExampleLabel">
					<div className="offcanvas-header">
						<h5 className="offcanvas-title">Carrito</h5>
						<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						<div className="alert alert-primary">El carrito está vacío.</div>
						<div className="table-responsive">
							<table className="table table-sm table-bordered table-hover">
								<thead className="table-primary">
									<tr>
										<th scope="col">Nº</th>
										<th scope="col">Juego</th>
										<th scope="col">Precio</th>
										<th scope="col">Cantidad</th>
										<th scope="col"></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="text-center">1</td>
										<td>Mario Kart Deluxe</td>
										<td>$44.990</td>
										<td>1</td>
										<td className="text-center">
											<button type="button" className="btn btn-sm btn-danger">
												X
											</button>
										</td>
									</tr>
									<tr>
										<td className="text-center">2</td>
										<td>Sonic Forces</td>
										<td>$30.990</td>
										<td>2</td>
										<td className="text-center">
											<button type="button" className="btn btn-sm btn-danger">
												X
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="alert alert-light text-end">
							<span className="fw-bold">Total:</span> $106.970
						</div>
					</div>
				</div>

				{/* JUEGOS */}
				<main className="flex-grow-1">
					<div className="row">
						{juegos.map(juego => (
							//<Componente parametro={valor} />
							<Juego key={juego.id} juego={juego} />
						))}
					</div>
				</main>

				{/* PIE PAGINA */}
				<footer className="border-top py-3">
					<h6>EIN133 Diseño y Progrmación Orientada a la Web</h6>
					UTFSM
				</footer>
			</div>
		</>
	)
}

export default App
