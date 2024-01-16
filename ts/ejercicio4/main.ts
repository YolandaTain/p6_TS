import { Animal } from "./animal";
import { Pajaro } from "./pajaro";

let gato: Animal;
gato = new Animal("Sorik", 3, "MaineCoon");

let gaviota: Pajaro;
gaviota = new Pajaro("gaviota", 2, "ave", "playa", "blanco");

console.log(gato.getEdad());