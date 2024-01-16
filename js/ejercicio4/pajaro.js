"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pajaro = void 0;
const animal_1 = require("./animal");
class Pajaro extends animal_1.Animal {
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
exports.Pajaro = Pajaro;
