interface DispositivoElectronico {
    nombre: string;
    encendido: boolean;

    encender: () => void;
    apagar: () => void;
}

class Laptop implements DispositivoElectronico {
    constructor(public nombre: string, public encendido: boolean, public modelo: string) {
        this.modelo=modelo;
    }

    encender() {
        console.log("Encendiendo...")
    }

    apagar() {
        console.log("Apagando...")
    }

    public abrirPrograma(){
        console.log("Abriendo programa...")
    }

}

class Smartphone implements DispositivoElectronico {
    constructor(public nombre: string, public encendido: boolean, public marca: string) {
        this.marca=marca;
    }

    encender() {
        console.log("Encendiendo...")
    }

    apagar() {
        console.log("Apagando...")
    }

    public llamar(){
        console.log("Llamando...")
    }
}

let laptop1: Laptop;
let smartphone1: Smartphone;
laptop1 = new Laptop('Lenovo', true, '300e');
smartphone1 = new Smartphone('Pocophone', false, 'Xiaomi');
laptop1.encender();
laptop1.apagar();
laptop1.abrirPrograma();

smartphone1.encender();
smartphone1.apagar();
smartphone1.llamar();
