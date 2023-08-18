// Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor, 
// Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario 
// y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el 
// numero de páginas.


const cargarLibro = ()=>{
    let ISBN = prompt("Ingrese el ISBN del libro");
    let nombreLibro= prompt("Ingrese el titulo del libro");
    let autor = prompt("Ingrese el nombre del autor");
    let numP = prompt("Ingrese el numero de paginas del libro");


    let libroCreador = crearLibro(ISBN,nombreLibro,autor,numP);

    return libroCreador;
}

console.table(cargarLibro());

function crearLibro(isbn,nombre,autor,numpag){

    let nuevoLibro={
        ISBN: isbn,
        tituloLibro: nombre,
        autor: autor,
        numPagina: numpag
    }

    return nuevoLibro;

}



// function cargarLibro() {
   
//     ISBN = prompt('Ingrese el número de ISBN');
//     Titulo = prompt('Ingrese el título');
//     Autor = prompt('Ingrese el Autor');
//     NumPag = prompt('Ingrese el número de páginas');
//     let libro = {
//         ISBN,
//         Titulo,
//         Autor,
//         NumPag,
//     }
//     return libro;
    
// }
// function mostrarLibro() {
//     //let resultado = `Libro ${this.ISBN} ${this.Titulo} ${this.Autor} ${this.NumPag}`; console.log(resultado);
//     let libro = cargarLibro();
//     for(let aux in libro){
//         console.log(libro[aux]);
//     }
// }

// mostrarLibro();
