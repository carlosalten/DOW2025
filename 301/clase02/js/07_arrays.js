//Arreglos
const valores = [10,15,18,23]

//Mostrar elementos del array
console.log(valores)
console.table(valores)
console.log(valores[1]) //mostrar el segundo elemento

//Modificar array
const alumnos = ["Dagoberto","Gonzalo","Gabriel"]
console.log("\n")
console.log(alumnos)

alumnos[2] = "Carlos"
console.log(alumnos)
alumnos[3] = "Ricardo"
console.log(alumnos)

//poner los elementos de alumnos en un nuevo array más otro alumno nuevo
const alumnos2 = [...alumnos,"Federico"]
console.log(alumnos2)

//Filtrar
alumnos[2] = "Gabriel"
console.log("Arreglo Original:")
console.log(alumnos)
//filtrar a todos los que el nombre no empieza con G
const alumnosFiltrado = alumnos.filter(function(alumno){
    if(alumno[0]==="G"){
        return alumno
    }
})
console.log(alumnosFiltrado)

//Mapear
const alumnosModificado = alumnos.map(function(alumno){
    if(alumno==="Dagoberto"){
        alumno = "Dagoberto Cabrera"
    }
    return alumno
})
console.log(alumnosModificado)
