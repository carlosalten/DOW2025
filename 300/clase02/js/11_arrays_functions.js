//Array Functions
const alumnos = ['Dagoberto', 'Gonzalo', 'Federico', 'Gabriel', 'Lais']

//Filtrar
const alumnosFiltrado = alumnos.filter(function (alumno) {
    if (alumno[0] !== "G") {
        return alumno
    }
})
console.log('FILTRADO')
console.log(alumnos) //array original
console.log(alumnosFiltrado)

//Lo mismo con un array function
const alumnosFiltrado2 = alumnos.filter(alumno => alumno[0] !== "G")
console.log('\nFiltrado con arrow function')
console.log(alumnos) //array original
console.log(alumnosFiltrado2)

//Includes
//Revisar si un elemento existe en el array
const resultado = alumnos.includes("Lais")
console.log('\nINCLUDES')
console.log(resultado)
console.log(typeof resultado)

//Find
//Retorna el primer elemento que cumple la condición
const resultadoFind = alumnos.find(alumno => alumno === "Lais")
console.log('\nFIND')
console.log(resultadoFind)
console.log(typeof resultadoFind)

const resultadoFind2 = alumnos.find(alumno => alumno[0] === "G") //retorna el primero de los que comienzan con G
console.log(resultadoFind2)

//Some
//Indica si al menos 1 de los elementos del array cumple la condición
const valores = [20, 50, 1, 7, 150]
//Revisar si hay alguno que sea menor que 10
const resultadoSome = valores.some(valor => valor < 10)
console.log('\nSOME')
console.log(resultadoSome)

//Every
//Indica si todos cumplen la condición
const resultadoEvery = valores.every(valor => valor < 10)
console.log('\nEVERY')
console.log(resultadoEvery)

//Reduce
//Acumular valores del array
const valores2 = [1, 2, 3]
// .reduce(function,valor_inicial_acumulador)
const resultadoReduce = valores2.reduce((total, valor) => {
    return total += valor
}, 0)
console.log('\nREDUCE')
console.log(`Total: ${resultadoReduce}`)