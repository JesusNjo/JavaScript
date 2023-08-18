
// A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
// a) Determinar cual de los dos elementos de texto es mayor
let valores = [true, 5, false, "hola", "adios", 2];
let arrayStrings = [];
for(let i =0; i<valores.length;i++){
    if(typeof valores[i] == "string"){
        arrayStrings.push(valores[i]);
    }
};
console.log(arrayStrings);


let fraseMayor = "";

for(let i =0; i<arrayStrings.length;i++){
    if(arrayStrings[i].length > fraseMayor.length){
        fraseMayor = arrayStrings[i];
    }
}
console.log(fraseMayor);


// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los 
// operadores necesarios para obtener un resultado true y otro resultado false

let arrayBoolean= [];

for(let i =0; i<valores.length;i++){
    if(typeof valores[i] == "boolean"){
        arrayBoolean.push(valores[i]);
    }
}
console.log(arrayBoolean);

const booleanos = (a,b)=>{
    const valorV= arrayBoolean[0];
    const valorF = arrayBoolean[1];

    for(let i =0; i<arrayBoolean.length;i++){
        if(a == b){
            return valorV;
        }else if(a == true && b == false){
            return valorF;
        }else if(a == true || b == false){
            return valorV;
        }
        
        else{
            return arrayBoolean[1];
        }
    }
}
console.log(booleanos(true,false));

// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los 
// dos elementos numéricos

let arrayNumeros=[];

for(let i =0; i<valores.length;i++){
    if(typeof valores[i] == "number"){
        arrayNumeros.push(valores[i]);
    }
}
console.log(arrayNumeros);


let suma = arrayNumeros.reduce((x,y)=>{ let total = x+y; return total;});
console.log(suma);

let resta = arrayNumeros.reduce((x,y)=>{ let total = x-y;return total;});
console.log(resta);

let multiplicacion = arrayNumeros.reduce((x,y)=>{let total = x*y; return total;});
console.log(multiplicacion);


let division = arrayNumeros.reduce((x,y)=>{let total = x/y; return total;});
console.log(division);

let exponencial = arrayNumeros.reduce((x,y)=>{let total = x**y; return total;});
console.log(exponencial);