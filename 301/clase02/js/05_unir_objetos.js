const producto = {
    id:124,
    marca:"Dell",
    modelo:"Latitude 3521",
    precio:1200000
}

//agrega objeto a otro objeto
const itemCarrito = {
    contidad:10,
    producto
}
console.log(itemCarrito)
console.log(itemCarrito.producto.marca+" "+itemCarrito.producto.modelo)

const itemCarrito2 = {
    cantidad:10,
    ...producto //obtener lo que está dentro del objeto producto
}
console.log(itemCarrito2)