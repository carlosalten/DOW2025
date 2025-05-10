import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Juego from './components/Juego'
import PanelCarrito from './components/PanelCarrito'
import { juegos } from './data/juegos'

function App() {
	const carritoInicial = () => {
		const carritoLocalStorage = localStorage.getItem('carrito')
		return carritoLocalStorage ? JSON.parse(carritoLocalStorage) : []
	}

	const [carrito, setCarrito] = useState(carritoInicial)

	useEffect(() => {
		localStorage.setItem('carrito', JSON.stringify(carrito))
	}, [carrito])

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

	function removeJuegoCarrito(juego) {
		const nuevoCarrito = carrito.filter(juegoCarrito => juegoCarrito.id !== juego.id)
		setCarrito(nuevoCarrito)
	}

	function add1Juego(idJuego) {
		console.log('Add 1')
		const MAX_JUEGOS = 3
		const nuevoCarrito = carrito.map(juego => {
			if (juego.id === idJuego && juego.cantidad < MAX_JUEGOS) {
				juego.cantidad++
			}
			return juego
		})
		setCarrito(nuevoCarrito)
	}

	function remove1Juego(idJuego) {
		console.log('Remove 1')
		const MIN_JUEGOS = 1
		const nuevoCarrito = carrito.map(juego => {
			if (juego.id === idJuego && juego.cantidad > MIN_JUEGOS) {
				juego.cantidad--
			}
			return juego
		})
		setCarrito(nuevoCarrito)
	}

	function vaciarCarrito() {
		setCarrito([])
	}

	return (
		<>
			<div className="container-fluid d-flex flex-column vh-100">
				{/* ENCABEZADO */}
				<Header carrito={carrito} />

				{/* OFFCANVAS CARRITO */}
				<PanelCarrito
					carrito={carrito}
					removeJuegoCarrito={removeJuegoCarrito}
					add1Juego={add1Juego}
					remove1Juego={remove1Juego}
					vaciarCarrito={vaciarCarrito}
				/>

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
