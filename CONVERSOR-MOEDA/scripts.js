const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currentSelectConverter = document.querySelector(".current-select-converter")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyValueConverted = document.querySelector(".currency-value") //valor em outras moedas

    const realToday = 5
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.2
    const bitcoinToday = 215193.72

    if (currencySelect.value == "real") { //Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)

    }

    if (currencySelect.value == "dolar") { //Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }
    if (currencySelect.value == "euro") { //Se o select estiver selecionado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") { //Se o select estiver selecionado o valor de libra, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }

    if (currencySelect.value == "bitcoin") { //Se o select estiver selecionado o valor de libra, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)

    }


    if (currentSelectConverter.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currentSelectConverter.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currentSelectConverter.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currentSelectConverter.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currentSelectConverter.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

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
convertButton, currentSelectConverter.addEventListener("click", convertValues)
currentSelectConverter.addEventListener("change", changeConvert)