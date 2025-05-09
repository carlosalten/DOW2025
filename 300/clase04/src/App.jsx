import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Juego from "./components/Juego"
import PanelCarrito from "./components/PanelCarrito"
import { juegos } from "./data/juegos"

function App() {
	const [carrito, setCarrito] = useState([])

	function addJuegoCarrito(juego) {
		// console.log("Agregar al carrito")
		const existeEnCarrito = carrito.includes(juego)

		if (!existeEnCarrito) {
			//juego no existe en carrito. Agregar con cantidad 1
			juego.cantidad = 1
			setCarrito(carrito => [...carrito, juego])
		} else {
			//juego existe en el carrito. Sumar 1 a la cantidad
			const carritoNuevo = [...carrito]
			const indexJuego = carritoNuevo.findIndex(juegoCarrito => juegoCarrito.id === juego.id)
			carritoNuevo[indexJuego].cantidad++
			setCarrito(carritoNuevo)
		}
	}

	return (
		<>
			<div className="container-fluid d-flex flex-column vh-100">
				{/* ENCABEZADO */}
				<Header />

				{/* OFFCANVAS CARRITO */}
				<PanelCarrito carrito={carrito} />

				{/* JUEGOS */}
				<main className="flex-grow-1">
					<div className="row">
						{juegos.map(juego => (
							//<Componente parametro={objeto} />
							<Juego key={juego.id} juego={juego} addJuegoCarrito={addJuegoCarrito} />
						))}
					</div>
				</main>

				{/* PIE PAGINA */}
				<Footer />
			</div>
		</>
	)
}

export default App
