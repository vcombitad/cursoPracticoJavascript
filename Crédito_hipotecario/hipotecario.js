

const validaAños = function (){
const tiempoAños = [10,15,20,25];
const periodoAños = document.getElementById("periodo");
const valuePeriodo = parseInt  (periodoAños.value);
if (valuePeriodo === tiempoAños[0]) {
return tiempoAños[0];
} else if (valuePeriodo === tiempoAños[1]){
    return tiempoAños[1];
} else if (valuePeriodo === tiempoAños[2]){
    return tiempoAños[2];
} else if (valuePeriodo === tiempoAños[3]){
    return tiempoAños[3];
} else {
    return 0;
}
};

function calcularPrestamo (){

const inputSalario = document.getElementById ("salario");
const salarioMensual = inputSalario.value;
const prestamo = (salarioMensual * 1000000) / 30000;

return prestamo - (prestamo % 1000000); 
};

function calcularCuotaMensual () {

    const validaAño= validaAños()*12;
    const valorPrestamo=calcularPrestamo();
    const valorInmueble= valorPrestamo/0.7;
    const valorInmuebleApro = valorInmueble - (valorInmueble % 1000000);
    const cuota= (valorPrestamo*0.008051)/(1- Math.pow((1+ 0.008051), -validaAño));
    
    const años = document.getElementById("años");
años.innerText = "la Cuota mensual es de $ " + Math.floor(cuota) + " mil pesos";

    const resultado = document.getElementById("resultado");
resultado.innerText = "tu prestamo es de $ " + Math.floor(valorPrestamo) + " millones";

const legal = document.getElementById("legales");
legal.innerText = "La tasa de interés usada para el cálculo es un promedio de referencia.";

const inmobiliario = document.getElementById("valorInmobiliario");
inmobiliario.innerText = "El valor del inmueble es de " + valorInmuebleApro;

};






