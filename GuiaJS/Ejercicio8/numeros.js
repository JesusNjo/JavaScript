// Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el 
// programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de 
// todos ellos



let op = null;
let cont = 0;
let numMayor = 0;
let numMenor = 0;
let suma = 0;

while(op!=0){
    op=parseInt(prompt(`Ingrese un numero..`));
    
    suma+=op;
    
    if(cont ==0){
        numMayor = op;
        numMenor = op;
       
    }
    if(op>numMayor){
        numMayor = op;
    
    }
    if(op<numMenor && op != 0){
    numMenor = op;
}

// numMayor = op > numMayor ? op : numMayor;
// numMenor = op < numMenor && op != 0 ? op : numMenor; 

cont++;
}

alert(`Numero mayor: ${numMayor}\nNumero menor: ${numMenor}\nPromedio: ${(suma/(cont-1))}`);

