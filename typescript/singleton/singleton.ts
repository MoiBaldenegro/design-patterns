/*
Como implementar singleton?

1.- El constructor tiene ue ser privado
2..- crear un metodo ue simule al constructor y regresar siempre la misma instancia 

*/

interface ISingleton {
    version: string;
}

type TInstance = TypeSingleton | undefined;

class TypeSingleton implements ISingleton {

    private static instance: TInstance = undefined;
    public version: string;
    private constructor(version: string) {
        this.version = version;
    }

    public static getInstance(version: string): TypeSingleton {
        if (TypeSingleton.instance) return TypeSingleton.instance;
        TypeSingleton.instance = new TypeSingleton(version);
        return TypeSingleton.instance;
    }
}

const single_one_ts: TypeSingleton = TypeSingleton.getInstance("version-one");
const single_two_ts: TypeSingleton = TypeSingleton.getInstance("version_two");

console.log(single_one_ts.version);
console.log(single_two_ts.version)