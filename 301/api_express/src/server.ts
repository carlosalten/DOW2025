import Express from 'express'
import router from './router'
import db from './config/db'

const server = Express()

//Conectar a la BD
async function conectarBD() {
	try {
		await db.authenticate()
		db.sync
		console.log('Conexión a BD exitosa')
	} catch (error) {
		console.log('No se pudo conectar a la BD')
		console.log(error)
	}
}

conectarBD()

// server.get('/saludar', (request, response) => {
// 	response.send('Hola desde Express')
// })

server.use('/api', router)

export default server
