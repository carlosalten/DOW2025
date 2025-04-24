//Declaración
function sumar(valor1, valor2) {
	return valor1 + valor2
}

console.log(sumar(10, 20))
console.log(sumar(5))

function sumar2(valor1 = 1, valor2 = 2) {
	//valores por defecto
	return valor1 + valor2
}

console.log(sumar2(10, 20)) // 10 + 20
console.log(sumar2()) // 1 + 2
console.log(sumar2(5)) // 5 + 2
console.log(sumar2(undefined, 5)) //1 + 5

//Function expression
const sumar3 = function (valor1 = 0, valor2 = 0) {
	return valor1 + valor2
}
console.log(sumar3(12, 13))

//Arrow Functions
const sumar4 = (valor1 = 0, valor2 = 0) => valor1 + valor2
console.log(sumar4(7, 13))

// function duplicar(valor){
//     return valor*2
// }
const duplicar = valor => valor * 2
