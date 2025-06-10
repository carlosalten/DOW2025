import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layouts'
import Home from './views/Home'
import Categorias from './views/Categorias'
import Productos from './views/Productos'

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
