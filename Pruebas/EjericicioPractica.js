


function tiendaHelados(n){
    let dinero = parseFloat(prompt("Dinero disponible de "+n));
    if(dinero >=0.6){dinero-=0.6; alert(`${n} te alcanzo para el helado de agua y te quedan ${dinero.toFixed(1)}`);}
    if(dinero >=1){dinero-=1; alert(`${n} te alcanzo para el helado de agua y te quedan ${dinero.toFixed(1)}`);}
    if(dinero >=1.7){dinero-=1.7; alert(`${n} te alcanzo para el helado de agua y te quedan ${dinero.toFixed(1)}`);}
    if(dinero >=1.8){dinero-=1.8; alert(`${n} te alcanzo para el helado de agua y te quedan ${dinero.toFixed(1)}`);}
    if(dinero >=2.9){dinero-=2.9; alert(`${n} te alcanzo para el helado de agua y te quedan ${dinero.toFixed(1)}`);}
    if(dinero >=3){dinero-=3; alert(`${n} te alcanzo para el helado de agua y te quedan ${dinero.toFixed(1)}`);}
}


tiendaHelados("Cofla");
tiendaHelados("Pedro");
tiendaHelados("Roberto");
