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
const coupons = [
    "Genin",
    "Chunin",
    "Jounin",
    
]

function onClickButtonPriceDiscount (){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const coupontValue = inputCoupon.value;

let descuento;
switch (coupontValue){
case coupons [0]: //"Genin"
descuento = 10;
break;
case coupons [1]: //"Chunin"
descuento = 15;
break;
case coupons [2]: //"Jounin"
descuento = 20;
break;
}

    const precioDescuento = calculaPrecioConDescuento (priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $ " + precioDescuento;
const valorAhorrado = priceValue - precioDescuento;

    const ahorroP = document.getElementById("ahorroP");
    ahorroP.innerText = "Tu ahorro es de $ " + valorAhorrado;


}