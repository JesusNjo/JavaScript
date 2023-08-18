// Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación 
// solicite números al usuario hasta que la suma de los números introducidos supere el 
// límite inicial. 



let num = parseInt(prompt("Indique el numero limite"));

let result = 0;

while(num>result){
    let sum = parseInt(prompt("Indique el numero para superar el limite "+num));
    result += sum;

}
alert(`Limite superado, actual: ${result} || limite ${num}`);