/*
Como implementar singleton?

1.- El constructor tiene ue ser privado
2..- crear un metodo ue simule al constructor y regresar siempre la misma instancia 

*/

class Singleton {

    static instance = undefined;

    constructor(version) {
        this.version = version;
    }

    static getInstance(version) {
        if (this.instance) {
            console.log("No es posible tener 2 instancias de Singleton, por lo tanto retornamos la misma")
            return Singleton.instance;
        }
        Singleton.instance = new Singleton(version);
        return Singleton.instance;
    }
}

const single_one = Singleton.getInstance("version-one");
const single_two = Singleton.getInstance("version_two")
console.log(single_one.version);
console.log(single_two.version)
