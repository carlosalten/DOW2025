//Arreglos
const valores = [10,15,18,23]
console.log(valores)
console.table(valores)

//Acceder a un valor
console.log(valores[1]) //imprime el segundo valor del array

//Modificar un arreglo
const alumnos = ["Dagoberto","Gonzalo","Gabriel"]
console.log(alumnos)
// alumnos[2] = "Carlos" //sobreescribe el tercer valor del array
console.log(alumnos)
alumnos[3] = "Ricardo"
console.log(alumnos)

//Fusionar
const alumnos2 = [...alumnos,"Federico"] //todo lo que está dentro de alumnos más "Federico"
console.log(alumnos2)

//Filtrar
console.log("\nFiltrado")
//copiar a alumnosFiltrado aquellos alumnos que comienzan con "G"
const alumnosFiltrado = alumnos.filter(function(alumno){
    if(alumno[0]==="G"){
        return alumno
    }
})
console.log(alumnosFiltrado)

//Mapear
//Se usa para modificar elementos del arreglo y dejarlos en otro
const alumnosModificado = alumnos.map(function(alumno){
    if(alumno==="Dagoberto"){
        alumno = "Dagoberto Cabrera"
    }
    return alumno
})
console.log(alumnosModificado)