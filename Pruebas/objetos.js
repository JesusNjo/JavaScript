


let persona={
    Persona1:{
        nombre: "Francisco",
        apellido: "Naranjo",
        edad: 29,
        isDeveloper: true
    },
    Persona2:{
        nombre: "Juan",
        apellido: "Perez",
        edad: 24,
        isDeveloper: false
    },
    Persona3:{
        nombre: "Leo",
        apellido: "Garcia",
        edad: 24,
        isDeveloper: true
    }
};


let array =[];
    
for(let i = 0; i<persona.Persona1.nombre.length; i++){

    array.push(persona.Persona1.nombre.substring(i,(i+1)));
    

}

array.pop();
array.shift();
array.unshift("f");
array.push("o");

array.forEach(x=>{
    console.log(x);
})

document.write(array);

let miNombre = "";
for(let i=0; i<array.length;i++){
     miNombre+= array[i];
}
console.log(miNombre.toUpperCase());