// Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el 
// resultado


const eliminarElementos = ()=>{
    let arrayN = [];
    let array = [];
    for(let i = 1;i<=10;i++){
        array[i-1] = i;
        if(i ==10){
            for(let j = 0; j<2;j++){
                arrayN[j]= array.pop();
            }
        }
    }
    console.log(array);
    console.log(arrayN);
}
eliminarElementos();

