const carreras = ["TU Inf","TU Elec","TU CD","Ing. Inf"]

//sacar la tercera carrera
const carrera = carreras[2]
console.log(carreras)
console.log(`La tercera carrera es ${carrera}`)

//destructuring
const [carrera1,carrera2] = carreras
console.log(carrera1)
console.log(carrera2)

//sacar la tercera
const [,,carrera3] = carreras
console.log(`La tercera carrera es ${carrera3}`)