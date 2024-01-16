"use strict";
class Animal {
    constructor(nombre, edad, tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    hacerRuido() {
        return "Ruido animal";
    }
}
class Pajaro extends Animal {
    constructor(nombre, edad, tipo, especie, colores, id) {
        super(nombre, edad, tipo);
        this.especie = especie;
        this.colores = colores;
        this.id = id;
    }
    getEspecie() {
        return this.especie;
    }
    setEspecie(especie) {
        this.especie = especie;
    }
    getColores() {
        return this.colores;
    }
    setColores(colores) {
        this.colores = colores;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    estaMarcado() {
        var estaMarcado = false;
        if (!estaMarcado) {
            return this.id;
        }
        else {
            return "No está marcado. Añada un nuevo id";
        }
    }
}
class Perro extends Animal {
    constructor(nombre, edad, tipo, raza, vacuna) {
        super(nombre, edad, tipo);
        this.raza = raza;
        this.vacuna = vacuna;
    }
    getRaza() {
        return this.raza;
    }
    setRaza(raza) {
        this.raza = raza;
    }
    getVacuna() {
        return this.vacuna;
    }
    setVacuna(vacuna) {
        this.vacuna = vacuna;
    }
    estaVacunado() {
        if (this.vacuna) {
            return "Este perro ya tiene las vacunas";
        }
        else {
            return "No está vacunado, mandar email al dueño";
        }
    }
}
let gato;
gato = new Animal("Sorik", 3, "MaineCoon");
console.log("La edad es del gato es: " + gato.getEdad() + " años");
let gaviota;
gaviota = new Pajaro("gaviota", 2, "ave", "playa", "blanco");
console.log(gaviota);
