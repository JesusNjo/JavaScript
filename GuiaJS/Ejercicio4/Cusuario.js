//  Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario 
// ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla 
// que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”. 

const validar = ()=>{
    
    let bandera = true;
    while(bandera){
        let palabra = prompt("Indique un caracter que sea S/N");
        if(palabra.toLowerCase() == "n" || palabra.toLowerCase() == "s"){
            alert("CORRECTO");
            bandera = false;
          }else{
            alert("INCORRECTO")
          }
        
    }
}
validar();