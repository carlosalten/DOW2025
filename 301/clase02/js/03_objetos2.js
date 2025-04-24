const alumno = {
    rut:"15789235-4",
    nombre:"Federico Santa María",
    edad:60
}

// Object.freeze(alumno) //bloquea un objeto para no modificarlo

//cambiar el valor de un atributo
console.log(alumno.edad)
alumno.edad = 65
console.log(alumno.edad)

//agregar una propiedad
alumno.tieneGratuidad = true
console.log(alumno)

//quitar una propiedad
delete alumno.tieneGratuidad
console.log(alumno)