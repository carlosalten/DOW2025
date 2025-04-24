const alumnos = ["Dagoberto", "Gonzalo", "Federico", "Gabriel", "Lais"]

//Filter
console.log("FILTER")
const alumnosFiltrado = alumnos.filter(alumno => alumno[0] !== "G")
console.log(alumnosFiltrado)

//Includes
//Revisa si un elemento existe en el array
console.log("\nINCLUDES")
const alumnoIncludes = alumnos.includes("Dagoberto")
console.log(alumnoIncludes)
console.log(typeof alumnoIncludes)

//Find
//Retorna el primer elemento del array que cumple la condición
console.log("\nFIND")
const alumnoFind = alumnos.find(alumno => alumno[0] === "G")
console.log(alumnoFind)

//Some
//Indica si al menos 1 de los elementos del array cumple la condicion
console.log("\nSOME")
const valores = [20, 50, 1, 7, 150]
const resultadoSome = valores.some(valor => valor < 10)
console.log(resultadoSome)

//Every
//Indica si todos los elementos cumplen la condición
console.log("\nEVERY")
const resultadoEvery = valores.every(valor => valor < 10)
console.log(resultadoEvery)

//Reduce
//Retorna acumulado de los valores
console.log("\nREDUCE")
const valores2 = [1, 2, 3]
const resultadoReduce = valores2.reduce((total, valor) => {
	return (total += valor)
}, 0)
console.log(resultadoReduce)
