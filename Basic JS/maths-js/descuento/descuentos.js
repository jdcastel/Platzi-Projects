const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const btn = document.querySelector("#calcular");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

const couponsList = [];
couponsList.push({
  name: "JuanDC_es_Batman",
  discount: 30,
});
couponsList.push({
  name: "pero_es_un_secreto",
  discount: 25,
});
couponsList.push({
  name: "no_le_digas_a_nadie",
  discount: 15,
});

const coupons2 = [
  {
    Managua: 15,
  },
  {
    Sol: 20,
  },
];

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResult.innerText = "CHANCLA por favor llena el formulario";
    return;
  }

  let discount;

  function isCouponInArray(couponElement) {
    // {name, discount}
    return couponElement.name == coupon;
  }

  const couponInArray = couponsList.find(isCouponInArray); // {}

  if (couponInArray) {
    discount = couponInArray.discount;
  } else {
    pResult.innerText = "El cupón no es válido";
    return;
  }

  console.log({
    coupon,
    discount,
    couponInArray,
    couponsList,
  });

  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = "El nuevo precio con descuento es $" + newPrice;
  calcularNuevoCupon();
}
///////////////////////////////////////////
function calcularNuevoCupon() {
  // flatMap new array with expected output: ["Managua", 15,"Sol",20]
  // Object.keys return array with expected output: ["Managua", "15","Sol","20"]
  // In prop we pass what we wanna compare inside the array

  if (coupons2.flatMap((item) => Object.keys(item)).includes(input2.value)) {
    let discount =
      (+input1.value *
        (100 - promotion.find((item) => item[input2.value])[input2.value])) /
      100;
    p.innerText = `You get a ${
      //
      promotion.find((item) => item[input2.value])[input2.value]
    }% off. Price with discount: $${discount}`;
  } else {
    p.innerText = "There is no promotion with this code.";
  }
}
