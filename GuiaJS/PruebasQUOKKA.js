

let palabra = "hola";

console.log(palabra);

Fecha = new Date(2009,0,1);
Fecha.setMonth(3)
console.log(Fecha);

let array= [2,"string",true,undefined,null];


array.forEach((element,index)=> {
    console.log(`${element} ${index}`);
});

let arrayO =["a","b","c"];
let arrayN = [2,3,4,6,1,2,9,3,4,8,65];

console.log(arrayO.slice(0,2))

console.log(arrayO.reverse())

console.log(arrayN.sort())

var arr1 = [1, 2, [3, 4]];
console.log(arr1.flat(1));
// [1, 2, 3, 4]
var arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat(2))

let frutas = ["pera","manzana","durazno"];


frutas.pop()
console.log(frutas);