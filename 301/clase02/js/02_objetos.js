//objeto
const alumno = {
	rut: "15789235-4",
	nombre: "Federico Santa María",
	edad: 60,
}

//mostrar datos
console.log(alumno)
console.table(alumno)
console.log(alumno.nombre) //sintaxis de punto
console.log(alumno.direccion) //undefined

//extraer datos
// const rut = alumno.rut
// const edad = alumno.edad
const { rut, edad } = alumno
console.log(rut + " " + edad)

//enhanced object literals
const jornada = "Diurna"
const gratuidad = true
// const nuevoObjeto = {
//     jornada: jornada, //key:variable que tiene el dato
//     gratuidad: gratuidad
// }

const nuevoObjeto = {
	jornada,
	gratuidad,
}
