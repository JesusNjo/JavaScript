// Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y 
// muestre el siguiente array [6, 9, 12, 15, 18].

let arrayOriginal = [[3], [6], [9], [12], [15]];

let arrayCambio = arrayOriginal.flat(1).map(x=> x+3);

console.log(arrayCambio);