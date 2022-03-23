function calculaRMS (datos){
    let alCuadrado = datos.map(function(al2){
return Math.pow(al2, 2);
    });
const sumaAlCuadrado = alCuadrado.reduce ((beforeElement , afterElement)=> beforeElement + afterElement )
const raizAlCuadrado =  Math.sqrt (sumaAlCuadrado/datos.length);
return raizAlCuadrado
}
  


