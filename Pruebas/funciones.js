



const capicua =(n)=>{
    
    let aux = parseInt(n).toString();
    
   let i = 0;
   let j = aux.length-1;
   
   while(i<j){

    if(aux.charAt(i) != aux.charAt(j)){
        console.log("no es capicua");
        return false;
    }
    i++;
    j--;
   }
   console.log("Es capicua");
   return true;
}

capicua(1212121);


const numRomanos = (nr)=>{

    let resultado = 0;

   
    for(let i = 0; i<nr.length;i++){

        let valor = op(nr.charAt(i));

        if(i<nr.length -1 && valor<op(nr.charAt(i))){
            resultado -= valor;
        }else{
            resultado += valor;
        }
    }

    

    return resultado;
}

const op = (char)=>{

    switch(char){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
    }
}

console.log(numRomanos('MM'));


const obj = ()=>{
    let array = [3,7,2,15];
    let arrayN = [];
    let target = 17;

    

    for(let i =0 ; i<array.length;i++){
        for(let j = i+1; j<array.length;j++){

            if(array[i] + array[j] == target){
                arrayN.push(i);
                arrayN.push(j);
            }
        }
    }

    return arrayN.toString();
}

console.log("["+obj()+"]");




const estrellas = ()=>{

    let cantidad = prompt("Ingrese la cantidad de estresas");
    for(let i = 0; i<cantidad;i++){
        document.write("*");
       for(let j = 0; j<i;j++){
        if(i == cantidad){
            
            document.write("*");
            document.write("<br>")
        }
       }
    }
}
estrellas();