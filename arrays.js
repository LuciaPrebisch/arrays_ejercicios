/* ARRAYS: permiten agrupar varios tipos de datos en una sola variable 


let seriesFavoritas = ["Friends" , "Breaking Bad" , "GOT"]

console.log (seriesFavoritas[2]) // --> devuelve "GOT"    (denrto de esos corchetes va el valor de lo almacenado en ese nivel del string)

Este ejemplo contiene 3 elementos y 2 indices (friends en 0, BB en 2, GOT en 3)


METODO: permiten modificar cosas dentro del array

a) "push" permite agregar un dato en particular al final del array. Se ejecuta sobre un array existente
let colores = ["azul" , "rojo" , "amarillo"]
colores.push ("violeta", "naranja")  --> devuelve  ["azul" , "rojo" , "amarillo", "violeta" , "naranja"]

b) "pop" permite sacar en vez de agregar. Saca el ULTIMO elemento del array, tmb permite almacenarlo en una nueva variable para posterior uso

let nombres = ["Juana", "Lucia" , "Julio"]
let elUltimo = nombres.pop()
console.log (elUltimo)


c) si quiero sacar algo al principio del array existen 2 metodos 
shift: saca el elemento del array ubicado en el indice 0 (en este caso seria "Juana")
nombres.shift ()  --> devuelve [ "Lucia" , "Julio"]


unshift: inserta datos al principio del array 
nombres.unshift ("Cristina") --> devuelve ["Cristina" , "Juana", "Lucia", "Julio"]


d) indexOf : se ejecuta sobre array dado y recibe como parametro una cadena de texto que busca dentro del array
let colores = ["azul", "blanco", "rojo", "verde"]
colores.indexOf ("rojo") --> devuelve el "2" que es donde se encuentra ese elemento 
Si el valor que buscamos no esta dentro del array devuevle "-1"

e) lastIndexOf : hace exactamente lo mismo que el anterior pero empieza a buscar desde el final hacia el indice 0 del array (de atras para adelante)

f) join() : permite unificar todos los elementos presentes en el array en un unico string
let diasDelaSemana = ["Lunes" , "Martes", "Miercoles", "Jueves" , "Sabado"]
diasDelaSemana.join() --> devuelve "Lunes,martes,miercoles,jueves,viernes"

g) includes: similar a indexof pero devuelve un booleano. Recibe un elemento a buscar en el array, "true" si lo encuentra "false" si no
let frutas = ["manzana" , "pera" , "banana"]
frutas.includes ("banana") --> encontro lo que buscaba devuelve "true"

frutas.includes ("frutilla") --> no encontro lo que busca devuelve "false"


*/







