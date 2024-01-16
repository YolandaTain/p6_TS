class Animal{
    private nombre: string;
    private edad: number;
    private tipo: string;

    constructor(nombre: string, edad: number, tipo:string){
        this.nombre=nombre;
        this.edad=edad;
        this.tipo=tipo;
    }

    public getNombre(): string{
        return this.nombre;
    }

    public setNombre(nombre:string):void{
        this.nombre=nombre;
    }

    public getEdad(): number{
        return this.edad;
    }

    public setEdad(edad:number):void{
        this.edad=edad;
    }

    public getTipo(): string{
        return this.tipo;
    }

    public setTipo(tipo:string):void{
        this.tipo=tipo;
    }

    public hacerRuido(): string{
        return "Ruido animal";
    }
}

class Pajaro extends Animal{
    //Propiedades
    
    private especie: string;
    private colores: string;
    private id: number | undefined;

    constructor(nombre: string, edad: number, tipo:string, especie:string, colores:string, id?:number){
        super(nombre, edad, tipo)
        this.especie=especie;
        this.colores=colores;
        this.id=id;
    }

    public getEspecie(): string{
        return this.especie;
    }

    public setEspecie(especie:string):void{
        this.especie=especie;
    }

    public getColores(): string{
        return this.colores;
    }

    public setColores(colores:string):void{
        this.colores=colores;
    }

    public getId(): number | undefined{
        return this.id;
    }

    public setId(id:number | undefined):void{
        this.id=id;
    }

    public estaMarcado(){
       var estaMarcado=false
        if(!estaMarcado){
            return this.id;
        }else{
            return "No está marcado. Añada un nuevo id";
        }
    }
}

class Perro extends Animal{
    //Propiedades
    private raza: string;
    private vacuna: boolean;

    constructor(nombre: string, edad: number, tipo:string, raza:string, vacuna:boolean){
        super(nombre, edad, tipo)
        this.raza=raza;
        this.vacuna=vacuna;
    }

    public getRaza(): string{
        return this.raza;
    }

    public setRaza(raza:string):void{
        this.raza=raza;
    }

    public getVacuna(): boolean{
        return this.vacuna;
    }

    public setVacuna(vacuna:boolean):void{
        this.vacuna=vacuna;
    }

    public estaVacunado(){    
        if(this.vacuna){
            return "Este perro ya tiene las vacunas";
        }else{
            return "No está vacunado, mandar email al dueño";
        }
    }
}

let gato: Animal;
gato = new Animal("Sorik", 3, "MaineCoon");

console.log("La edad es del gato es: " + gato.getEdad() +" años");

let gaviota: Pajaro;
gaviota = new Pajaro("gaviota", 2, "ave", "playa", "blanco");
console.log(gaviota);


