"use strict";
/**
 * 1. Se necesita una función llamada contarPalabras que reciba una cadena de texto como parámetro y cuente la cantidad de palabras que contiene. Se considera que una palabra está delimitada por espacios en blanco.
 *
 */
function contarPalabras(cadena) {
    let cantidad = 0;
    let palabras = cadena.split(" ");
    palabras.forEach(element => {
        cantidad++;
    });
    return cantidad;
}
console.log(contarPalabras("Esto es una prueba para contar palabras"));
/**
 * 2. Crea una función llamada getAvenger que reciba tres parámetros:
Nombre: obligatorio.
Poder opcional.
Arma: por defecto “arco”.
Esta función devuelve un mensaje que describe las habilidades y armamento del superhéroe basado en los parámetros proporcionados. Si se proporciona un poder, se muestra junto con el nombre y el arma. En caso contrario, se indica únicamente el nombre.
Invoca la función varias veces para comprobar que funciona.

 */
function getAvenger(nombre, poder, arma = "puños") {
    if (poder) {
        return "El superhéroe tiene el nombre: " + nombre + "y el arma: " + arma + " y el poder: " + poder;
    }
    else {
        return "El superhéroe tiene el nombre: " + nombre;
    }
}
console.log(getAvenger("SuperMan", "vuela"));
