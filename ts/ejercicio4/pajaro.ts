import { Animal } from "./animal";

export class Pajaro extends Animal{
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

