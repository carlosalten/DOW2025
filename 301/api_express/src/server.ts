import Express from 'express'
import router from './router'
import db from './config/db'
import cors, { CorsOptions } from 'cors'

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

//Habilitar cors
const corsOptions: CorsOptions = {
	origin: function (origin, callback) {
		if (!origin || origin === process.env.FRONTEND_URL) {
			//permitir
			callback(null, true) //error, permitir o no
		} else {
			//denegar
			callback(new Error('Error de CORS'), false)
		}
	},
}
server.use(cors(corsOptions))

//Habilitar para lectura de json que envía el cliente
server.use(Express.json())

//Todos los endpoints que comienzan con /api los maneja router.ts
server.use('/api', router)

export default server
