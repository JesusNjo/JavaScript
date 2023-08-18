// Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios 
// y los muestre por pantalla. 



const devolverArray=()=>{
    

let array= [];
let array2= [];

for(let i=0; i<5;i++){
    array.push(Math.ceil(((Math.random()*10)+1)));
    array2.push(Math.ceil(((Math.random()*10)+1)));
}

console.log(array.toString());
console.log(array2.toString());
}
devolverArray();
