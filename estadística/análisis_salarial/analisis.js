//Funciones helpers



const salariosCol = Colombia.map(
    function (personita) {
return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
return salaryA - salaryB;
    }
);

function esPar (numerito){
 return (numerito % 2 === 0);
};
//calculadora de mediana
function medianaSalarios (lista) {
    const mitad = parseInt(lista.length / 2);
    
    if (esPar (lista.length)) {
    const personitaMitad1 = lista [mitad - 1];
    const personitaMitad2 = lista [mitad];
    const mediana = calculaMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;
    
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
    };

// calculo de mediana
function calculaMediaAritmetica (lista) {
   
    const sumaLista = lista.reduce ( 
        function (valorAcumulado=0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
        return promedioLista
        }
    

const medianaGeneralColombia = medianaSalarios (salariosColSorted);

//mediana del top 10%
const sliceStart = salariosColSorted.length*0.9;
const sliceCount = salariosColSorted.length - sliceStart;
/* con splice, este método tiene un problema y es que
saca a los datos del array que se usa mientras slice no...
const salariosColTop10 = salariosColSorted.splice(
    sliceStart, 
    sliceCount,
    );*/

const salariosColTop10 = salariosColSorted.slice(
        sliceStart, 
        salariosColSorted.length,
        );

const medianaTop10Col = medianaSalarios (salariosColTop10);

console.log ({
    medianaGeneralColombia,
    medianaTop10Col,
});