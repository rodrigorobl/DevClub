/*
function padrao -> function() {}

arrow function -> () => {}

Nao escrevemos "function ".
Alem disso, usamos o sinal "=>" para cria-la,
o que lembra uma flecha, fazendo jus ao nome "Arrow Functions".
*/

function sayMyName(name) {
    return `Seu nome é ${name}.`
}

const sum = (number1, number2) => `O valor da soma ${number1} + ${number2} = ${number1 + number2}.`
// na mesma linha nao precisa do return, o mesmo e automatico.
console.log(sayMyName ('Rodolfo'))

console.log(sum (2,3))