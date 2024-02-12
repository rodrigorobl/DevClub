let cart = [10, 244, 99, 2, 20, 33, 250];

function calcularDesconto(preco) {
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