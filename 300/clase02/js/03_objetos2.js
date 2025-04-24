const alumno = {
    rut: "15123658-6",
    nombre: "Federico Santa María",
    edad: 60
}

//cambiar valor de propiedad
console.log(alumno)
alumno.edad = 65
console.log(alumno)

//agregar una propiedad
alumno.tieneGratuidad = true
console.log(alumno)

//quitar una propiedad
delete alumno.tieneGratuidad
console.log(alumno)