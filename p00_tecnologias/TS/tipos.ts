interface Autor {
    nombre: string;
    apellido: string
}

class Tipos {
    name: string;
    age: number;
    isMan: boolean;
    aDatos: Array<string>;
    aNombres: string[];
    algo: any[];
    absurdo: {};
    otroAutor: {
        nombre: string;
        apellido: string
    }
    autor: Autor;
}

class AutorModel implements Autor {
    nombre: string;
    apellido: string;
    
}