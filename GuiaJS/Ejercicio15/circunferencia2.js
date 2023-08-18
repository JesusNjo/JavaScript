// Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo 
// con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El 
// radio del círculo lo proporcionará el usuario.
// area = PI * radio2 
// perimetro = 2 * PI * radio 


const calcularArea=(valor)=>{
    
    let area = Math.PI * (valor*valor);
    return area;
}
const calcularPerimetro=(valor)=>{
    
    let perimetro = 2*Math.PI * valor;
    return perimetro;

}
let radio = parseInt(prompt("Indique el radio del circulo"));
alert(`El area de su circulo es: ${calcularArea(radio)}\nEl perimetro de su circulo es: ${calcularPerimetro(radio)}`);