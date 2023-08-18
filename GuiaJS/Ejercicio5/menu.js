// Construir un programa que simule un menú de opciones para realizar las cuatro 
// operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores 
// numéricos enteros. El usuario, además, debe especificar la operación con el primer 
// carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’ 
// o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. 


const menu = () =>{
    op = "";
    do{

        alert("Indique la operacion que desea realizar");
        let op = prompt("S: Suma\nR:Resta\nM:Multiplicación\nD:Division").toUpperCase();
      
            alert("Operacion invalida");
            break;
        
        switch(op){
            case "S":alert(n1+n2);break;
            case "R":alert(n1-n2);break;
            case "M":alert(n1*n2);break;
            case "D":alert(n1/n2);break;
            default:alert("Operación invalida");
        }

    }while(op);
}

menu();