// Escribir una función que reciba un String y devuelva la palabra más larga. 
// String Ejemplo: “Guia de JavaScript”
// Resultado esperado : “JavaScript”

function palabraLarga(palabra){
    
    let palabraNueva = palabra.split(" ");
    
    let palabraLargaCom = "";
    for(let i = 0; i<palabraNueva.length;i++){
        if(palabraNueva[i].length>palabraLargaCom.length){
            palabraLargaCom = palabraNueva[i]
        }
    }

    palabra = palabraLargaCom;
    return palabra;

}

console.log(palabraLarga("Guia de JavaScript"));