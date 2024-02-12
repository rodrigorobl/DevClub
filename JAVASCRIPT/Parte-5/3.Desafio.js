/*
Calcula desconto:
Todos os produtos 10, 244, 99, 2, 20, 33, 250 acima de R$ 30,00 tem desconto de 10%.
*/

//const cart = [{prod1:10, prod2:244, prod3:99, prod4:2, prod5:20, prod6:33, prod7:250}]
//const cart = [10, 244, 99, 2, 20, 33, 250]



// Lista de preços dos produtos
let cart = [10, 244, 99, 2, 20, 33, 250];

// Função para calcular o desconto de 10% nos produtos acima de R$ 30,00
function calcularDesconto(preco) {
    if (preco > 30) {
        let desconto = 0.1 * preco;
        return preco - desconto;
    } else {
        return preco;
    }
}

// Aplicar o desconto a cada produto e imprimir os resultados
console.log("Preços originais e com desconto:");
for (let i = 0; i < cart.length; i++) {
    let precoOriginal = cart[i];
    let precoComDesconto = calcularDesconto(precoOriginal);
    console.log("Produto " + (i + 1) + ": R$" + precoOriginal.toFixed(2) + " -> R$" + precoComDesconto.toFixed(2));
}










//cart.forEach(function (item, index) {
   
    //console.log(`${index + 1}) prod1: ${item.prod1}, prod2: ${item.prod2}, prod3: ${item.prod3}, prod4: ${item.prod4}, prod5: ${item.prod5}, prod6: ${item.prod6}, prod7: ${item.prod7}`)
    //console.log(prod1+10%)
        
//});



// Definindo o valor inicial
//var valorInicial = 10;

// Calculando 10%
//var dezPorcento = (10 / 100) * valorInicial;

// Subtraindo 10% de 10
//var resultado = valorInicial - dezPorcento;

//console.log(resultado); // Imprime o resultado