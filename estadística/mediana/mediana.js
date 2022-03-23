function calculaMediaAritmetica (lista) {
   
const sumaLista = lista.reduce ( 
    function (valorAcumulado=0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
);
const promedioLista = sumaLista / lista.length;
    return promedioLista
    }


function agregarLista(lista1){
    
    const mitadLista1 = parseInt(lista1.length/2);

function esPar(numerito){

    if(numerito % 2 == 0){
        return true;
}
else{
    return false;
}
}
listaFinal=lista1.sort((a, b) => a - b);
    let mediana;
    if(esPar (listaFinal.length)){
    const elemento1 = listaFinal[mitadLista1];
    const elemento2 = listaFinal[mitadLista1 - 1];
    //forma fácil => mediana = (elemento1+elemento2) /2
    mediana= calculaMediaAritmetica([elemento1, elemento2]);
    } else {
    mediana = lista1[mitadLista1];
    }
    return mediana;
}
