//Recorrer array
const carreras = ['TU INF', 'TU CD', 'ING INF', 'TU ELEC']

//for tradicional
console.log('FOR tradicional')
for (let i = 0; i < 4; i++) {
    console.log(carreras[i])
}

//for donde el largo no está fijo
console.log('\nFOR tradicional con array length')
for (let i = 0; i < carreras.length; i++) {
    console.log(carreras[i])
}

//for ...of
console.log('\nFOR ...of')
// for (let nombre_nodo of nombre_array)
for (let carrera of carreras) {
    console.log(carrera)
}

//Foreach
console.log('\nFOREACH')
carreras.forEach(function (carrera) {
    console.log(carrera)
})

//Map
console.log('\nMAP')
const otroArray = carreras.map(function (carrera) {
    console.log(carrera)
})
