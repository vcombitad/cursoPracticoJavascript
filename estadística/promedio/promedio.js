
function calculaMediaAritmetica (lista) {
    /*((Promedio opción 1))
    let sumalista1 = 0;
    for( let i = 0; i < lista.length; i++ ){
    sumalista1 = sumalista1 + lista[i];*/
    //Promedio opción 2
const sumaLista = lista.reduce ( 
    function (valorAcumulado=0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
);

    const promedioLista = sumaLista / lista.length;
    return promedioLista
    }
