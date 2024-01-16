"use strict";
/**
 * Crea un nuevo archivo TS, llamado empleado.ts. En este se definirá una clase Employee con las siguientes características:
Tendrá varios atributos: nombre, apellido, edad, fecha de inicio del trabajo, una fecha de finalización (podrá ser nula) y la profesión.
Crea su constructor.
Crea los métodos get y set para cada uno de los atributos.
Crea dos empleados, uno que tenga fecha de finalización y otro que no la tenga ya que continúa trabajando, pinta por consola el nombre y la edad de cada uno de ellos.

 */
class Employee {
    constructor(nombre, apellido, edad, fecha_inicio, fecha_finalizacion, profesion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fecha_inicio = fecha_inicio;
        this.fecha_finalizacion = fecha_finalizacion;
        this.profesion = profesion;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellido() {
        return this.apellido;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getFecha_inicio() {
        return this.fecha_inicio;
    }
    setFecha_inicio(fecha_inicio) {
        this.fecha_inicio = fecha_inicio;
    }
    getFecha_finalizacion() {
        return this.fecha_finalizacion;
    }
    setFecha_finalizacion(fecha_finalizacion) {
        this.fecha_finalizacion = fecha_finalizacion;
    }
    getProfesion() {
        return this.profesion;
    }
    setProfesion(profesion) {
        this.profesion = profesion;
    }
    imprimir() {
        console.log(`Nombre: ${this.nombre} / Edad:${this.edad}`);
    }
}
var empleado1 = new Employee('Juan', 'Sánchez', 45, new Date("2018-3-16"), new Date(2018 - 5 - 16), 'panadero');
var empleado2 = new Employee('María', 'Millán', 25, new Date("2018-3-16"), null, 'programadora');
empleado1.imprimir();
empleado2.imprimir();
console.log(empleado1.getFecha_inicio());
