// Escribir una función flecha que reciba una palabra y la devuelva al revés. 


// const palabraAlrevez = (palabra)=>{


//     palabra.split("").reverse().join("");

//     return nuevaPalabra;


// }

const palabraAlrevez2 = (palabra)=>{

    let nuevaPalabra = "";

   
    for(let i = palabra.length; i>0; i--){
        nuevaPalabra += palabra.substring(i , (i-1));
    }
    
    return nuevaPalabra;
}

console.log(palabraAlrevez2("Pedro"));
