const alumno = {
    rut: "15123658-6",
    nombre: "Federico Santa María",
    edad: 60
}

const carrera = {
    nombre: "TU en Informática",
    semestres: 4
}

// Esto genera un problema porque hay 2 variables "nombre"
// const { nombre } = alumno
// const { nombre } = carrera

const { nombre:nombreAlumno } = alumno //cambiar el nombre de la variable
const { nombre:nombreCarrera } = carrera