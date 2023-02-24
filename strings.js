/* Para acceder al caracter puntual de un strign, nombramos al string y dentro de corchetes el indice al cual queremos acceder 
// let nombre : Lucia 
// nombre [c] muestra la letra "C" numero 3 del string


// length: longitud del string (cantidad total de caracteres)

// indexOf( ) : busca un elemento en el string y lo retorna
let saludo : "Hola! Estamos programando"
saludo.indexOf ("Estamos")  --> devuelve el 7 

// slice () : Para saber una porcion de texto
Recibe 2 numeros como parametros (el indice donde inica el corte hasta donde hacer el corte)

let frase = "Breaking Bad Rules"
frase.slice (9,12) --> devuelve "Bad"


// trim () : Elimina los espacios en blanco al principio o final de un string
no recibe parametros y no quita los espacios del medio

let nombre: "      Lucia     Prebisch    "
nombre.trim () --> devuelve "Lucia     Prebisch"



// split () : Para generar un array, divide string en partes y devuelve un array con partes del string

let cancion = "When the night has come, and"
cancion.split ("") --> devuelve: ["and", "the", "night", "has"]
cancion.split (", ") --> devuelve un array ["When the nigjt has come, and"]

// Replace () : Para cambiar una porcion de textob
Recibe dos strings como parametros (el string que queremos buscar y el string que queremos reemplazar)
Retorna el nuevo string con el reemplazo

let frase = "Aguante Pyhton"

frase.replace("Python" , "JS") --> devuelve "Aguante JS"





*/