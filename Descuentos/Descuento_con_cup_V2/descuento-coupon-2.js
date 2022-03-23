
function calculaPrecioConDescuento (precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = precio * porcentajePrecioConDescuento / 100;
    return precioConDescuento
}

const coupons = [
    {
        nombre : "Genin",
        descuento : 10,

},
{
    nombre : "Chunin",
    descuento : 15,

},
{
    nombre : "Jounin",
    descuento : 20,

},
    
]

function onClickButtonPriceDiscount (){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function (coupon) {
return coupon.nombre === couponValue;
};
   
const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon){
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El nombre de tu cupón no existe";

    const ahorroP = document.getElementById("ahorroP");
        ahorroP.innerText = "No tienes ahorro sin cupón valido";

} else {
    const descuento = userCoupon.descuento;
    const precioConDescuento = calculaPrecioConDescuento(priceValue, descuento);
     
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es de: $ " + precioConDescuento;
    const valorAhorrado = priceValue - precioConDescuento;
    
        const ahorroP = document.getElementById("ahorroP");
        ahorroP.innerText = "Tu ahorro es de $ " + valorAhorrado;
}



}