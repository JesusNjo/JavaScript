// Escribir un programa para obtener un array de las propiedades de un objeto Persona. 
// Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura. 


Persona1={
    nombre: "Mario",
    edad : 40,
    sexo: "H",
    peso: 70,
    altura: 1.70  
};
let arrayPersona = [];

for(let aux in Persona1){
    arrayPersona.push(Persona1[aux]);
}
console.log(arrayPersona);