//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");


function perimetroCuadrado (lado){
    return lado*4
} 
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado (lado){
return  lado*lado;
} 
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Código del triángulo
//console.group("Triángulos");
//const lado1Triangulo = 6;
//const lado2Triangulo = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5;
//console.log(
    //"los lados del triángulo miden: " 
    //+ lado1Triangulo 
    //+ "cm, " 
    //+ lado2Triangulo 
    //+ "cm, " 
    //+ baseTriangulo 
    //+ "cm."
  //  );
    //console.log("La altura del triángulo es de: " + alturaTriangulo);
    function perimetroTriangulo (lado1, lado2, base){
     return lado1 + lado2 + base;
    } 
    function areaTriangulo (base, altura) {
        return (base*altura)/2;
    } 
    //console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");
    //console.log("El área del triángulo es: " + areaTriangulo + "cm");
console.groupEnd();

//Código del círculo
console.group("Círculos");
//Radio
// const radioCirculo = 4;
//console.log("El radio del círculo es:" + radioCirculo + "cm");
//Diametro
function diametroCirculo (radio){
return radio*2;
}
//console.log("El diametro del círculo es:" + diametroCirculo + "cm");
//pi
const PI = Math.PI;
console.log("PI es:" + PI);
//circunferencia
function perimetroCirculo (radio){
const diametro = diametroCirculo (radio);
return diametro*PI;
}
//console.log("El perimetro del círculo es:" + perimetroCirculo + "cm");

//área
function areaCirculo (radio){
return (radio*radio)*PI;
}
//console.log("El área del círculo es:" + areaCirculo + "cm^2");

console.groupEnd();

//Aquí interactuamos con el html
//calculos para el cuadrado
function calcularPerimetroCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado (value);
    alert(perimetro);
}
function calcularAreaCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado (value);
    alert(area);
}
//calculos para el triángulo
function calcularPerimetroTriangulo (){
    const inputB = document.getElementById("InputBasTriangulo");
    const input1 = document.getElementById("InputLado1Triangulo");
    const input2 = document.getElementById("InputLado2Triangulo");
    const valueB = Number (inputB.value);
    const value1 = Number (input1.value);
    const value2 = Number (input2.value);
    const perimetroT = perimetroTriangulo (value1, value2, valueB);
    alert(perimetroT);
}
function calcularAreaTriangulo (){
    const inputB = document.getElementById("InputBaseTriangulo");
    const inputA = document.getElementById("InputAlturaTriangulo");
    const valueB = inputB.value;
    const valueA = inputA.value;
    const areaT = areaTriangulo (valueB, valueA);
    alert(areaT);
}
function calcularPerimetroCirculo (){
    const inputR = document.getElementById("InputCirculo");
    const value = inputR.value;
    const perimetroC = perimetroCirculo (value);
    alert(perimetroC);
}
function calcularAreaCirculo (){
    const inputR = document.getElementById("InputCirculo");
    const value = inputR.value;
    const areaC = areaCirculo(value);
    alert(areaC);
}
//altura de un triángulo isósceles
function alturaIsosceles (ladoA, ladoB, ladoC) {
        return Math.sqrt((ladoA*ladoB)-((ladoC*ladoC)/4));
     
}
function calcularAlturaTriangulo (){
    
    const inputLadoA = document.getElementById ("InputLadoA");
    const inputLadoB = document.getElementById ("InputLadoB");
    const inputLadoC = document.getElementById ("InputLadoC");
    const valueA = inputLadoA.value;
    const valueB = inputLadoB.value;
    const valueC = inputLadoC.value;
    const alturaIsos = alturaIsosceles(valueA, valueB, valueC);
        
        if (valueA===valueB && valueA != valueC){
            alert (alturaIsos);
        }
        else {
            
            alert("Las medidas de los lados no corresponden a un triángulo isosceles");
            
        }
    }
    
