//Operador Ternario (? :)
console.log("Operador Ternario")
const tieneBeca = true
//condicion ? valor_v : valor_f
tieneBeca ? console.log("Tiene Beca") : console.log("No tiene beca")
const edad = 20
const salida = edad >= 18 ? "Mayor de edad" : "Menor de Edad"
console.log(salida)
const salida2 = edad >= 18 ? "Mayor de edad" : edad < 10 ? "Niño/a" : "Adolescente"

//Optional Chainig (?)
console.log("\nOperador Ternario")
const carrera = {
	nombre: "TU Informática",
	semestres: 4,
}

console.log(carrera.nombre)
// console.log(carrera.asignaturas.asignatura1) //Error
console.log(carrera.asignaturas?.asignatura1) //imprime asignatura1 solo si asignaturas existe

//Nullish coalescing (??)
//Toma el valor de la derecha si el valor de la izquierda es null
console.log("\nNullish Coalescing")
const cantidadHijos = null
const bono = cantidadHijos * 20000 ?? 0
console.log(`Bono: ${bono}`) //backtick
