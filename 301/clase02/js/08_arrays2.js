//Destructuring de arrays
const carreras = ["TU Inf","TU Elec","TU CD","Ing. Inf"]

//sacar la ultma carrera
const carrera = carreras[3]
console.log(carreras)
console.log(carrera)

// sacar la primera y segunda carrera
const [ carrera1, carrera2 ] = carreras
console.log(carrera1)
console.log(carrera2)

//sacar solo la tercera carrera
const [,, carrera3 ] = carreras
console.log(carrera3)