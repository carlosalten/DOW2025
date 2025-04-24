//Declaración de una función
function sumarNumeros(valor1, valor2) {
    return valor1 + valor2
}

//Uso
console.log(sumarNumeros(10, 20))

//Declaración de una función con valores por defecto
function sumarNumeros2(valor1 = 1, valor2 = 2) {
    return valor1 + valor2
}

console.log('\nValores por defecto')
console.log(sumarNumeros2(10, 20)) //10 + 20
console.log(sumarNumeros2()) // 1 + 2
console.log(sumarNumeros2(5)) // 5 + 2
console.log(sumarNumeros2(undefined, 5)) // 1 + 5

//Function expression
const sumarNumeros3 = function (valor1 = 1, valor2 = 2) {
    return valor1 + valor2
}
console.log('\nFunction Expression')
console.log(sumarNumeros3(10, 20)) //10 + 20

//Arrow Functions
const sumarNumeros4 = (valor1 = 1, valor2 = 2) => valor1 + valor2

console.log('\nArrow Function')
console.log(sumarNumeros4(10, 20)) //10 + 20

//si la función lleva 1 solo parámetro los paréntesis son opcionales
const duplicar = valor => valor * 2
console.log(`Valor duplicado: ${duplicar(7)}`)