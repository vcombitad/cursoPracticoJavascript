//const precioOriginal = 120;
//const descuento = 18;

function calculaPrecioConDescuento (precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = precio * porcentajePrecioConDescuento / 100;
    return precioConDescuento
}


/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});*/
const cupones = [
    "Genin",
    "Chunin",
    "Jounin",
    
]

function onClickButtonPriceDiscount (){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    const precioDescuento = calculaPrecioConDescuento (priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $ " + precioDescuento;
const valorAhorrado = priceValue - precioDescuento;

    const ahorroP = document.getElementById("ahorroP");
    ahorroP.innerText = "Tu ahorro es de $ " + valorAhorrado;


}