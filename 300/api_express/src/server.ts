import Express from 'express'
import router from './router'
import db from './config/db'

const server = Express()

//Conecta a la BD
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

//Habilitar para lectura de json que envía el cliente
server.use(Express.json())

//Todos los endpoints que comienzan con /api los maneja router.ts
server.use('/api', router)

export default server
