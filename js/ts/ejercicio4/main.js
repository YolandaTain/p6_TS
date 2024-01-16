"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
const pajaro_1 = require("./pajaro");
let gato;
gato = new animal_1.Animal("Sorik", 3, "MaineCoon");
let gaviota;
gaviota = new pajaro_1.Pajaro("gaviota", 2, "ave", "playa", "blanco");
console.log(gato.getEdad());
