


function calculadora(n1,n2){

    n1 = parseInt(prompt("Indique el primer digito"));
    n2 = parseInt(prompt("Indique el segundo"));
    let aviso = prompt("Eliga una opcion \n1:Sumar\n2:Restar\n3:Multiplicar\n4:Dividir")
    if(aviso == 1){
        return n1+n2;
    }
    if(aviso ==2){
        return n1-n2;
    }
    if(aviso == 3){
        return n1*n2;
    }
    if(aviso == 4){
        return n1/n2;
    }
    
}

console.log(calculadora());


let numeros = [2,3,4,5,6,7,8,10,11,22,33,44,55,66,77];
let numPares = [];
let numImpares = [];

for(let i = 0; i<numeros.length;i++){
    if(numeros[i]%2==0){
        numPares.push(numeros[i]);
    }else{
        numImpares.push(numeros[i]);
    }
}
console.log(numPares);
console.log(numImpares);




function numP(num){
    num = 9;
    if(num ==2){
        return true;
    }else if(num <= 1){
        return false;
    }
    for(let i = 2; i<num; i++){
        if(num %i ==0){
            return false;
        }
    }
    return true;
    
}

console.log(numP());



function numeroP() {
    let array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
    let arrayP = [];
    let arrayNP = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i]<=1){
            continue;
        }else{

            let cont = 0;
            for (let j = 2; j < array[i]; j++) {
                if (array[i] % j == 0) {
                    cont++;
                }
            }
            if (cont == 0) {
                arrayP.push(array[i]);
            } else {
                arrayNP.push(array[i]);
            }
        }
    }
    console.log("Numeros primos ", arrayP);
    console.log("Numeros NO primos ", arrayNP);
}
numeroP();

let frase = "adasdasdasdasdasdasdasdasd";
let carac = "a";
let cont = 0;



for(i = 0 ; i<frase.length;i++){

    if(carac == frase.substring(i,i+1)){
        cont++;
    }
}

console.log(cont);

cont = 0;

let array = [2,3,4,5,6,7,8]
array.forEach(element=> {
    console.log(element);
    console.clear();
});

console.log(`${cont} el array`);
