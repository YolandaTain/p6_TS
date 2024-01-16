/**
 * Crea un nuevo archivo TS, llamado empleado.ts. En este se definirá una clase Employee con las siguientes características:
Tendrá varios atributos: nombre, apellido, edad, fecha de inicio del trabajo, una fecha de finalización (podrá ser nula) y la profesión.
Crea su constructor.
Crea los métodos get y set para cada uno de los atributos.
Crea dos empleados, uno que tenga fecha de finalización y otro que no la tenga ya que continúa trabajando, pinta por consola el nombre y la edad de cada uno de ellos.

 */

class Employee {
    private nombre: string;
    private apellido: string;
    private edad: number;
    private fecha_inicio: Date;
    private fecha_finalizacion: Date | null;
    private profesion: string;


    constructor(nombre:string, apellido:string, edad:number, fecha_inicio:any, fecha_finalizacion: any | null, profesion:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fecha_inicio = fecha_inicio;
        this.fecha_finalizacion = fecha_finalizacion;
        this.profesion = profesion;
    }
    public getNombre(): string{
        return this.nombre;
    }

    public setNombre(nombre:string):void{
        this.nombre=nombre;
    }

    public getApellido(): string{
        return this.apellido;
    }

    public setApellido(apellido:string):void{
        this.apellido=apellido;
    }

    public getEdad(): number{
        return this.edad;
    }

    public setEdad(edad:number):void{
        this.edad=edad;
    }

    public getFecha_inicio(): Date{
        return this.fecha_inicio;
    }
    public setFecha_inicio(fecha_inicio:Date):void{
        this.fecha_inicio=fecha_inicio;
    }

    public getFecha_finalizacion(): Date | null{
        return this.fecha_finalizacion;
    }

    public setFecha_finalizacion(fecha_finalizacion:Date | null):void{
        this.fecha_finalizacion=fecha_finalizacion;
    }

    public getProfesion(): string{
        return this.profesion;
    }

    public setProfesion(profesion:string):void{
        this.profesion=profesion;
    }

    imprimir() {
        console.log(`Nombre: ${this.nombre} / Edad:${this.edad}`);
        }
}

var empleado1 = new Employee('Juan', 'Sánchez', 45, new Date("2018-3-16"), new Date(2018-5-16), 'panadero');
var empleado2 = new Employee('María', 'Millán', 25, new Date("2018-3-16"), null, 'programadora');
empleado1.imprimir();
empleado2.imprimir();
console.log(empleado1.getFecha_inicio());