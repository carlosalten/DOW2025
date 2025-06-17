import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layouts'
import Home from './views/Home'
import Categorias, { loader as loaderCategorias } from './views/Categorias'
import CategoriasCrear, { action as actionCrearCategoria } from './views/CategoriasCrear'
import Productos, { loader as loaderProductos } from './views/Productos'
import ProductosCrear, {
	loader as loaderCategoriasCrearProducto,
	action as actionCrearProducto,
} from './views/ProductosCrear'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'categorias',
				element: <Categorias />,
				loader: loaderCategorias,
			},
			{
				path: 'categorias/crear',
				element: <CategoriasCrear />,
				action: actionCrearCategoria,
			},
			{
				path: 'productos',
				element: <Productos />,
				loader: loaderProductos,
			},
			{
				path: 'productos/crear',
				element: <ProductosCrear />,
				loader: loaderCategoriasCrearProducto,
				action: actionCrearProducto,
			},
		],
	},
])
