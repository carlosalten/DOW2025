export function foo() {
	console.log("FOO")
}

export function bar() {
	console.log("BAR")
}

export default function saludo(nombre) {
	console.log(`Hola ${nombre}`)
}

// Esto es equivalente a lo que está arriba
// function saludo(nombre) {
// 	console.log(`Hola ${nombre}`)
// }

// export default saludo
