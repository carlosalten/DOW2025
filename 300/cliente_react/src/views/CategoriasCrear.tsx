import { Form, Link, redirect, type ActionFunctionArgs } from 'react-router-dom'
import { categoriaCrear } from '../services/CategoriaService'

export async function action({ request }: ActionFunctionArgs) {
	const formData = Object.fromEntries(await request.formData())
	const resultado = await categoriaCrear(formData)
	if (!resultado?.success) {
		return resultado
	}
	return redirect('/categorias')
}

export default function CategoriasCrear() {
	return (
		<>
			<h2>Crear Categoría</h2>
			<div className="row">
				<div className="col-8">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="#">Inicio</a>
							</li>
							<li className="breadcrumb-item">
								<a href="#">Categorías</a>
							</li>
							<li className="breadcrumb-item active" aria-current="page">
								Agregar Categoría
							</li>
						</ol>
					</nav>
				</div>
				<div className="col-4 text-end">
					<Link to="/categorias" className="btn btn-sm btn-secondary">
						Volver a Categorías
					</Link>
				</div>
			</div>
			<div className="card">
				<div className="card-body">
					<Form method="POST">
						<div className="mb-3">
							<label className="form-label" htmlFor="nombre">
								Nombre
							</label>
							<input type="text" className="form-control" id="nombre" name="nombre" />
						</div>
						<div className="mb-3 text-end">
							<button type="reset" className="btn btn-warning me-1">
								Restablecer
							</button>
							<button type="submit" className="btn btn-success">
								Agregar Categoría
							</button>
						</div>
					</Form>
				</div>
			</div>
		</>
	)
}
