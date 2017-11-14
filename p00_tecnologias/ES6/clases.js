class Libro {
    constructor(autor, titulo){
        this.autor = autor
        this.titulo = titulo
    }
}

class LibroTecnico extends Libro {
    constructor(autor, titulo, tema){
        super(autor, titulo)
        this.tema = tema
    }
}

let oLibro = new LibroTecnico("Pepe", "Angular para expertos", "Programacion")
oLibro.editorial = "Anaya"
console.log (oLibro)