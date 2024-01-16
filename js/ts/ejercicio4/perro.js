"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perro = void 0;
const animal_1 = require("./animal");
class Perro extends animal_1.Animal {
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
exports.Perro = Perro;
