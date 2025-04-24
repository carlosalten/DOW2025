//Operador Ternario
console.log('OPERADOR TERNARIO')
const tieneBeca = true
// if (tieneBeca == true) {
//     console.log('Tiene beca')
// } else {
//     console.log('No tiene beca')
// }

// condicion ? valor_v : valor_f
tieneBeca == true ? console.log('Tiene beca') : console.log('No tiene beca')
tieneBeca ? console.log('Tiene beca') : console.log('No tiene beca')

const edad = 20
const mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad'
console.log(mensaje)

//Optional chaining (?)
console.log('\nOptional chaining')
const carrera = {
    nombre: 'TU Informática',
    semestres: 4
}
console.log(carrera.nombre)
console.log(carrera.asignaturas?.asignatura1)

//Nullish coalescing (??)
//Toma el valor de la derecha si es que el valor de la izquierda es null
console.log('\nNullish coalescing')
const cantidadHijos = null
const bono = cantidadHijos * 20000 ?? 0
console.log(`Bono: ${bono}`)