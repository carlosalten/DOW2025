const alumno = {
    rut:"15789235-4",
    nombre:"Federico Santa María",
    edad:60
}

const carrera = {
    nombre:"TU Informática",
    semestres:4
}

//Extraer el nombre del alumno y el de la carrera
//si los nombres son iguales, se pueden cambiar
const { nombre:nombreAlumno } = alumno
const { nombre:nombreCarrera } = carrera