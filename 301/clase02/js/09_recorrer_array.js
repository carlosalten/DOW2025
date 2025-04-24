const carreras = ["TU Inf", "TU Elec", "TU CD", "Ing. Inf"]

//FOR TRADICIONAL
console.log("FOR TRADICIONAL")
for (let i = 0; i < 4; i++) {
	console.log(carreras[i])
}

console.log("\nFOR TRADICIONAL CON ARRAY LENGTH")
for (let i = 0; i < carreras.length; i++) {
	console.log(carreras[i])
}

//FOR...OF
console.log("\nFOR...OF")
for (let carrera of carreras) {
	console.log(carrera)
}

//FOREACH
console.log("\nFOREACH")
carreras.forEach(function (carrera) {
	console.log(carrera)
})

//MAP
console.log("\nMAP")
const carreras2 = carreras.map(function (carrera) {
	console.log(carrera)
})
