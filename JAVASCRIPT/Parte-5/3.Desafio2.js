let cart = [10, 244, 99, 2, 20, 33, 250];

let finalValueWithDiscount = 0
let finalValue = 0
let discountValue =0

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}

cart.forEach(value => {
    finalValue += value
    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        finalValueWithDiscount = finalValueWithDiscount + (value - discount)
    } else {
        finalValueWithDiscount += value
    }
    discountValue = finalValue - finalValueWithDiscount
})
console.log(`O valor final da compra foi de R$ ${finalValue.toFixed(2)},
porem voce teve um desonto, ira pagar apenas R$ ${finalValueWithDiscount.toFixed(2)} 
e voce economizou R$ ${discountValue.toFixed(2)}.`)
















/*function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}

cart.forEach(value => {

    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        finalValue = finalValue + (value - discount)
    } else {
        finalValue += value
    }

})

console.log(finalValue)
*/






/*function calcularDesconto(preco) {
    if (preco > 30) {
        let desconto = 0.1 * preco;
        return preco - desconto;
    } else {
        return preco;
    }
}
console.log("Precos originais e com desconto:");
for (let i = 0; i < cart.length; i++) {
    let precoOriginal = cart[i];
    let precoComDesconto = calcularDesconto(precoOriginal);
    console.log("Produto " + (i + 1) + ": R$" + precoOriginal.toFixed(2) + " -> R$" + precoComDesconto.toFixed(2));
}
*/