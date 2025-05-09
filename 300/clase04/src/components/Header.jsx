export default function Header() {
	return (
		<header className="border-bottom pb-1 mb-2">
			<div className="row">
				<div className="col-10">
					<h1 className="text-danger">USM Juegos</h1>
					<span>Compra tus juegos online</span>
				</div>
				<div className="col-2 d-flex align-items-center justify-content-end pe-4">
					<button
						type="button"
						className="btn btn-sm btn-outline-primary position-relative"
						data-bs-toggle="offcanvas"
						data-bs-target="#ocCarrito"
					>
						<i className="bi bi-cart3 fs-4"></i>
						<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
					</button>
				</div>
			</div>
		</header>
	)
}
