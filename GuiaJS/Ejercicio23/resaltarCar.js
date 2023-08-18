// . Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo 
// amarillo, por ejemplo)



let palabrax =document.getElementsByTagName("p")[1].innerHTML = document.getElementsByTagName("p")[1]
.innerText.split(" ").map((palabra) =>
    palabra.length > 8 ? `<span class = "yb"> ${palabra} </span>` : palabra
  );

var css = document.createElement("style");
css.innerHTML = ".yb {background-color: yellow;}";
document.getElementsByTagName("head")[0].appendChild(css);

