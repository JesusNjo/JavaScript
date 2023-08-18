// Realizar un programa que pida una frase y el programa deberá mostrar la frase con un 
// espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el 
// funcionamiento de la función Substring()




let palabra = "Hola";
let palabraNueva = "";
for(let i = 0; i<palabra.length;i++){
    palabraNueva+= palabra.substring(i , (i+1)) + " ";
}
console.log(palabraNueva);