//importar las funciones
import { foo, bar } from './funciones.js'

foo()
bar()

//Importar cambiando el nombre
import { foo as fnFoo, bar as fnBar } from './funciones.js'
fnFoo()
fnBar()

//Importación por defecto
import saludar from './funciones.js'
saludar('Profe')