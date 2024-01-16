"use strict";
class Almacen {
    constructor() {
        this.elementos = [];
    }
    // Método para agregar un elemento al almacén
    agregarElemento(elemento) {
        this.elementos.push(elemento);
    }
    // Método para obtener un elemento del almacén por su posición
    obtenerElemento(posicion) {
        return this.elementos[posicion];
    }
    // Método para listar todos los elementos almacenados en el almacén
    listarElementos() {
        return this.elementos;
    }
}
var almacenarNumeros = new Almacen();
almacenarNumeros.agregarElemento(4);
almacenarNumeros.agregarElemento(6);
console.log("Listado de números:", almacenarNumeros.listarElementos());
var almacenarCadenas = new Almacen();
almacenarCadenas.agregarElemento("Cadena1");
almacenarCadenas.agregarElemento("Cadena2");
console.log("Almacén de cadenas", almacenarCadenas.listarElementos());
var almacenPersonas = new Almacen();
almacenPersonas.agregarElemento({ nombre: "Juan", edad: 30 });
almacenPersonas.agregarElemento({ nombre: "María", edad: 25 });
console.log("Almacén de personas:", almacenPersonas.listarElementos());
var obtenerN1 = almacenarNumeros.obtenerElemento(0);
console.log("Primer número en el almacén:", obtenerN1);
