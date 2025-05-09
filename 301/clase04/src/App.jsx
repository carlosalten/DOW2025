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

	// const [carrito, setCarrito] = useState([])
	const [carrito, setCarrito] = useState(carritoInicial)

	useEffect(() => {
		localStorage.setItem('carrito', JSON.stringify(carrito))
	}, [carrito])

	function addJuegoCarrito(juego) {
		const existeEnCarrito = carrito.includes(juego)

		if (!existeEnCarrito) {
			// No existe en carrito
			juego.cantidad = 1
			setCarrito([...carrito, juego]) //crear un nuevo carrito con lo que está actualmente más el juego nuevo
		} else {
			// Existe en el carrito
			const nuevoCarrito = [...carrito]
			const indexJuego = nuevoCarrito.findIndex(juegoCarrito => juegoCarrito.id === juego.id)
			nuevoCarrito[indexJuego].cantidad++
			setCarrito(nuevoCarrito)
		}
	}

	function removeJuegoCarrito(idJuego) {
		const nuevoCarrito = carrito.filter(juegoCarrito => juegoCarrito.id !== idJuego)
		setCarrito(nuevoCarrito)
	}

	function add1Juego(idJuego) {
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
		const MIN_JUEGOS = 1
		const nuevoCarrito = carrito.map(juego => {
			if (juego.id === idJuego && juego.cantidad > MIN_JUEGOS) {
				juego.cantidad--
			}
			return juego
		})
		setCarrito(nuevoCarrito)
	}

	return (
		<>
			<div className="container-fluid d-flex flex-column vh-100">
				{/* ENCABEZADO */}
				<Header />

				{/* OFFCANVAS CARRITO */}
				<PanelCarrito
					carrito={carrito}
					removeJuegoCarrito={removeJuegoCarrito}
					add1Juego={add1Juego}
					remove1Juego={remove1Juego}
				/>

				{/* JUEGOS */}
				<main className="flex-grow-1">
					<div className="row">
						{juegos.map(juego => (
							//<Componente parametro={valor} />
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
