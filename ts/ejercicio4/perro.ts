import { Animal } from "./animal";

export class Perro extends Animal{
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