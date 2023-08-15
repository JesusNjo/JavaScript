// Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio 
// de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que 
// para calcular el área y el perímetro se utilizan las siguientes fórmulas: 
// area = PI * radio2 
// perimetro = 2 * PI * radio 

const circunferencia = ()=>{
    let radio = prompt("Indique el valor de su radio");

    const area = Math.PI * (radio*radio);
    const perimetro = 2 * Math.PI * radio;

    alert(`Area: ${area.toFixed(2)}\nPerímetro: ${perimetro.toFixed(2)}`);


}

circunferencia();