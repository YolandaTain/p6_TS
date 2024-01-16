class Almacen<T> {
    public elementos: T[] = [];
  
    // Método para agregar un elemento al almacén
    agregarElemento(elemento: T): void {
      this.elementos.push(elemento);
    }
  
    // Método para obtener un elemento del almacén por su posición
    obtenerElemento(posicion: number): T | undefined {
      return this.elementos[posicion];
    }
  
    // Método para listar todos los elementos almacenados en el almacén
    listarElementos(): T[] {
      return this.elementos;
    }
  }
  
var almacenarNumeros = new Almacen<number>();
almacenarNumeros.agregarElemento(4);
almacenarNumeros.agregarElemento(6);
console.log("Listado de números:", almacenarNumeros.listarElementos());

var almacenarCadenas = new Almacen<string>();
almacenarCadenas.agregarElemento("Cadena1");
almacenarCadenas.agregarElemento("Cadena2");
console.log("Almacén de cadenas", almacenarCadenas.listarElementos());


interface Persona {
nombre: string;
edad: number;
}

var almacenPersonas = new Almacen<Persona>();
almacenPersonas.agregarElemento({ nombre: "Juan", edad: 30 });
almacenPersonas.agregarElemento({ nombre: "María", edad: 25 });
console.log("Almacén de personas:", almacenPersonas.listarElementos());

var obtenerN1 = almacenarNumeros.obtenerElemento(0);
console.log("Primer número en el almacén:", obtenerN1);

