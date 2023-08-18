// Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar. 
// En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”


const parImpar = (n)=>{

    if(n == 0){
        alert("El numero no es par ni impar");
    }else{

        if(n % 2==0){
            alert("Numero par");
    }else if(n % 2!=0){
        alert("No es par");
    }
        }
}

parImpar(0);