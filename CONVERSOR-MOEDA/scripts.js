const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currentSelectConverter = document.querySelector(".current-select-converter")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyValueConverted = document.querySelector(".currency-value") //valor em outras moedas

    
    const dolarToday = 5.15
    const euroToday = 5.44
    const libraToday = 6.29
    const bitcoinToday = 143.716
    // valor moeda base real

    const euroParaDolar = 0.94
    const libraParaDolar = 0.81
    const bitcoinParaDolar = 27389.90
    const realParaDolar = 5.06
    //valor moeda base dolar

    const dolarParaEuro = 1.06
    const libraParaEuro = 0.86
    const bitcoinParaEuro = 25.843
    //valor moeda base 

    const dolarParaLibra = 1.23
    const euroParaLibra = 1.16
    const bitcoinParaLibra = 22.292
    //valor moeda base 

    const dolarParaBit = 27.402
    const euroParaBit = 25.843
    const libraParaBit = 22.292
    const realParaBit = 143.716
    //valor moeda base bitcoin

    if (currentSelectConverter.value == "dolar" & currencySelect.value == "real") { //Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / realParaDolar)

    }

    if (currentSelectConverter.value == "dolar" & currencySelect.value == "euro") { //Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarParaEuro)

    }
    if (currentSelectConverter.value == "dolar" & currencySelect.value == "libra") { //Se o select estiver selecionado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarParaLibra)
    }

    if (currentSelectConverter.value == "dolar" & currencySelect.value == "bitcoin") { //Se o select estiver selecionado o valor de libra, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarParaBit)

    }

    if (currentSelectConverter.value == "dolar" & currencySelect.value == "dolar") { //Se o select estiver selecionado o valor de libra, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    }

    if (currentSelectConverter.value == "euro" & currencySelect.value == "real") { //Se o select estiver selecionado o valor de libra, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currentSelectConverter.value == "euro" & currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroParaDolar)
    }

    if (currentSelectConverter.value == "euro" & currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroParaLibra)
    }

    if (currentSelectConverter.value == "euro" & currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroParaBit)
    }

    if (currentSelectConverter.value == "euro" & currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currentSelectConverter.value == "libra" & currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currentSelectConverter.value == "libra" & currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraParaDolar)
    }

    if (currentSelectConverter.value == "libra" & currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraParaEuro)
    }

    if (currentSelectConverter.value == "libra" & currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraParaBit)
    }

    if (currentSelectConverter.value == "libra" & currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currentSelectConverter.value == "bitcoin" & currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / realParaBit)
    }

    if (currentSelectConverter.value == "bitcoin" & currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinParaDolar)
    }

    if (currentSelectConverter.value == "bitcoin" & currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinParaEuro)
    }

    if (currentSelectConverter.value == "bitcoin" & currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinParaLibra)
    }

    if (currentSelectConverter.value == "bitcoin" & currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

    if (currentSelectConverter.value == "real" & currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    }

    if (currentSelectConverter.value == "real" & currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    }

    if (currentSelectConverter.value == "real" & currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * libraToday)
    }

    if (currentSelectConverter.value == "real" & currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * bitcoinToday)
    }

    if (currentSelectConverter.value == "real" & currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/real.png"
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}
function changeConvert() {
    const convertName = document.getElementById("converter-name")
    const convertImage = document.querySelector(".convert-img")

    if (currentSelectConverter.value == "real") {
        convertName.innerHTML = "Real Brasileiro"
        convertImage.src = "./assets/real.png"
    }

    if (currentSelectConverter.value == "dolar") {
        convertName.innerHTML = "Dólar americano"
        convertImage.src = "./assets/dolar.png"
    }

    if (currentSelectConverter.value == "euro") {
        convertName.innerHTML = "Euro"
        convertImage.src = "./assets/euro.png"
    }

    if (currentSelectConverter.value == "libra") {
        convertName.innerHTML = "Libra"
        convertImage.src = "./assets/libra.png"
    }

    if (currentSelectConverter.value == "bitcoin") {
        convertName.innerHTML = "Bitcoin"
        convertImage.src = "./assets/bitcoin.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
currentSelectConverter.addEventListener("change", changeConvert)