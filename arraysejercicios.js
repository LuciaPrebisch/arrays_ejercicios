/*
1) Tenemos un array con palabras sueltas que, juntas, forman una gran frase.
Queremos, utilizando un método de array sobre la arrayFrase , convertirlo en una oración entera, y almacenar ese String en una variable llamada fraseNueva.



let frase = ["eh", "ura",  "que pingo mira", "cajeta"]
let arrayFrase = frase.join()
console.log(arrayFrase)

2) ¡Sí! ¡Alexis se egresó del terciario!
Para este ejercicio contamos con el array estudiantes, en donde, en cada índice, almacena un objeto con las propiedades nombre, promedio y curso.
Queremos sacar a Alexis, que acaba de egresar, y sabemos que está último en ese array.
Para eso debemos, utilizando un método de array, guardar los datos de Alexis en una variable nueva llamada alumnoEgresado.



let estudiantes = ["promedio: 9,78" , "curso: 7mo B" ,"Alexis Gomez"] 
let alumnoEgresado = estudiantes.pop()

console.log (alumnoEgresado)



3)
Se inscribieron dos estudiantes nuevos y queremos agregarlos al final del array estudiantes.
Nuestro trabajo será agregar de a un alumno por vez, utilizando algún método de array.
Los valores de cada uno son:
nombre: Juan
promedio: 5
curso: iOS

------------------

nombre: Miguel
promedio: 2
curso: Android


 

let alumno1 = ["Juan", "promedio 5" , "curso: iOS"]

let estudiantes = alumno1.unshift ("Miguel", "promedio 2", "curso: Android")
console.log(estudiantes)

4)
Se dio de baja un alumno.
Tenemos que dar de baja al primer estudiante y queremos sacarlo del array estudiantes. 
Para eso, debemos crear una variable llamada alumnoDeBaja y, utilizando un método de array, almacenar en ella a ese primer estudiante.


let estudiantes = ["Lucia", "Jose" , "Simon" , "Amalia"]
let alumnoDeBaja = estudiantes.shift()
console.log (alumnoDeBaja)
*/