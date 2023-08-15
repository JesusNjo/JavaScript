// Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de 
// edad se debe mostrar un mensaje indicándolo.

const edadUsr =()=>{
    let edad = prompt("Indique su edad");
    if(edad>=18){
        alert("Usted es mayor de edad");
    }else{
        alert("Usted es menor de edad");
    }
}

edadUsr();