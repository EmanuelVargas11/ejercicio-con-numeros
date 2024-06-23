// Clasificador de números:
// Escribe un programa que lea un número e imprima si es positivo, negativo o cero.

// let numeros = 1

// numeros = prompt("Ingrese un numero a eleccion")


// if(numeros <= -1){
//     console.log("Este numero es Negativo:", numeros);

// }else if(numeros >= 1) {
//     console.log("este Numero es Positivo:", numeros);

// }else {
//     console.log("Este numero es Cero:", numeros);
// }





// Calculadora básica:
// Diseña un script que pida dos números y una operación a realizar entre ellos (suma, resta, multiplicación, división). 
// Realiza la operación y muestra el resultado. Si se elige división, asegúrate de que no se intente dividir por cero.


alert("Bienvenido, a ingresado a la calculadora virtual. A continuacion debe ingresar un operador ")


let operador = Number(prompt(" seleccione un operador (1 = +  || 2 = -  || 3 = *  || 4 = / ). ¡Aclaracion, ingrese el numero correspondiente al operador a utilizar!" ) )
alert("A continuacion debe ingresar un numero y hacer clic en aceptar e ingresar nuevamente el siguiente numero y dar clic en aceptar ")

let numero1 = Number(prompt("Ingrese un numero"))
let numero2 = Number(prompt("ingrese un numero"))

let resultado;



if(operador == 1) {
    
    resultado = numero1+numero2
    console.log('el resultado es: '+resultado);

}else if(operador == 2){
    resultado = numero1-numero2
    console.log('el resultado es: '+resultado);


}else if(operador == 3){
    resultado = numero1*numero2
    console.log('el resultado es: '+resultado);


}else if(operador == 4){
    resultado = numero1/numero2
    console.log('el resultado es: '+resultado);


}else {
    console.log("No se recibio ningun Operador esperado y/o no se recibio un numero");
}
