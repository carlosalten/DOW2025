import Express from 'express'
import router from './router'
import db from './config/db'

const server = Express()

//Conectar a la BD
async function conectarBD() {
	try {
		await db.authenticate()
		db.sync()
		console.log('Conexión a BD exitosa')
	} catch (error) {
		console.log('No se pudo conectar a la BD')
		console.log(error)
	}
}

conectarBD()

//Habilita el API para recibir datos desde el cliente
server.use(Express.json())

//Endpoints que comiencen con '/api' son manejados por router.ts
server.use('/api', router)

export default server
