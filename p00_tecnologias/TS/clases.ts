interface Autor {
     nombre: string;
     apellido: string;

}

class Libro  implements Autor {
    public nombre: string;
    public apellido: string;
    public autor: string;
    public titulo: string;
    constructor(autor, titulo){
        this.autor = autor
        this.titulo = titulo
    }
}

class LibroTecnico extends Libro {
    public tema: string;
    constructor(autor, titulo, tema){
        super(autor, titulo)
        this.tema = tema
    }
}

let oLibro = new LibroTecnico({nombre:'Pepe', apellido: 'Perez'}, "Angular para expertos", "Programacion")
console.log (oLibro)