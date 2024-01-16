"use strict";
class Laptop {
    constructor(nombre, encendido, modelo) {
        this.nombre = nombre;
        this.encendido = encendido;
        this.modelo = modelo;
        this.modelo = modelo;
    }
    encender() {
        console.log("Encendiendo...");
    }
    apagar() {
        console.log("Apagando...");
    }
    abrirPrograma() {
        console.log("Abriendo programa...");
    }
}
class Smartphone {
    constructor(nombre, encendido, marca) {
        this.nombre = nombre;
        this.encendido = encendido;
        this.marca = marca;
        this.marca = marca;
    }
    encender() {
        console.log("Encendiendo...");
    }
    apagar() {
        console.log("Apagando...");
    }
    llamar() {
        console.log("Llamando...");
    }
}
let laptop1;
let smartphone1;
laptop1 = new Laptop('Lenovo', true, '300e');
smartphone1 = new Smartphone('Pocophone', false, 'Xiaomi');
laptop1.encender();
laptop1.apagar();
laptop1.abrirPrograma();
smartphone1.encender();
smartphone1.apagar();
smartphone1.llamar();
