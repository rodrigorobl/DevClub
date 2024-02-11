/* Functions / Funcoes
    Trecho de codigo que so e executado 
    apenas quando e solicitado (Parente gente boa)
*/

const myNumber = 0




function sub(value = myNumber, value2 = myNumber){
    total1 = value - value2
    console.log(`O valor sub e ${total1}.`)
}

function sum(value = myNumber, value2 = myNumber){
    total2 = value + value2
    return total2
    //console.log(`O valor sun e ${total2}.`)
    
}

function mult(value = myNumber, value2 = myNumber){
    total3 = value * value
    console.log(`O valor mult e ${total3}.`)
    
}

function div(value = myNumber, value2 = myNumber){
    total4 = value / value
    console.log(`O valor div e ${total4}.`)
    
}
const somatorio = sum(10, 30) 
    console.log(somatorio + " Resultado")
sub(30, 20)
mult(10, 10)
div(10,5)

    console.log(`O valor total e ${total1+total2+total3+total4}.`)



/*function sayMyName (name = "Rodrigo"){
    console.log(name)
}

sayMyName("Luciene")
*/
