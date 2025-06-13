import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './views/Home'
import Productos from './views/Productos'
import Categorias from './views/Categorias'

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
			},
			{
				path: 'productos',
				element: <Productos />,
			},
		],
	},
])
