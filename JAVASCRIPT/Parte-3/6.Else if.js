/*

    IF (SE)
    Else (Se Nao)
    Else if
*/


const temperature = 41
if (temperature === 36){
    console.log("Esta saudavel")
}else if (temperature > 36 && temperature <= 40) {
    console.log("Esta com febre")
}else if (temperature > 40){
    console.log("Esta com muita febre")
}else {
    console.log("esta com hipotemia")
}