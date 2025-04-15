//objeto
const alumno = {
    rut: "15123658-6",
    nombre: "Federico Santa María",
    edad: 60
}

console.log(alumno)
console.table(alumno)
console.log(alumno.nombre) //sintaxis de punto
console.log(alumno.direccion) //undefined

//Sacar valores de atributos
// const edad = alumno.edad
// const rut = alumno.rut
// console.log(edad)

//Destructuring
const { rut,edad } = alumno //esto es equivalente a las lineas anteriores
console.log(rut)
console.log(edad)

//Enhanced object literals
const jornada = "Diurna"
const gratuidad = true

// const nuevoObjeto = {
//     jornada:jornada,
//     gratuidad:gratuidad
// }

const nuevoObjeto = {
    jornada,
    gratuidad
}

console.log(nuevoObjeto)