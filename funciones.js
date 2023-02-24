// expresadas
let sumar = function (numeroA , numeroB) {
    return numeroA + numeroB
}

console.log (sumar(7, 9))

// funciones delcaradas

function restar(numeroC, numeroD){
return numeroC - numeroD
}

console.log (restar (10, 3))

// ejemplo de scope
let mensaje = ''
function saludar (){
    return mensaje
}


console.log(mensaje)