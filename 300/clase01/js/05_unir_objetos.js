const producto = {
    id:134,
    marca:"Dell",
    modelo:"Latitude 3521",
    precio:1200000
}

const carrito = {
    cantidad:35,
    producto //producto:producto -->si atributo y objeto se llaman igual
}
console.log(carrito)

const carrito2 = {
    cantidad:35,
    ...producto //extrae todos los atributos de producto
}
console.log(carrito2)