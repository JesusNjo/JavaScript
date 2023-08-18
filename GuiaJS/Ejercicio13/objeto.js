//Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer, 
// 'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript


 let objeto ={
    nombre: "Juan",
    edad: 25,
    sexo: "H",
    peso: "124kg",
    altura: "1.80m"
};

for(let propiedades in objeto){
    console.log(objeto[propiedades]);
}