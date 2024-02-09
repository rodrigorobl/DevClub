/*
Operadores Ternario

? if(se)
: else (se nao)
&& if sem else

*/
const salary = 10000
/*if(salary < 3000){
    console.log("Colaborador e Junior")
}else if(salary >= 3000 && salary < 10000){
    console.log("Colaborador e Senior")
}else {
    console.log("Colaborador e presidente")
}*/
// IF salary < 3000 && console.log("Colaborador e Junior")

// IF/ELSE -> salary < 3000 ? console.log("Colaborador e Junior") : console.log("Colaborador e Senior")

salary < 3000 ? console.log("Colaborador e Junior") : (salary >= 3000 && salary < 10000) ? console.log("Colaborador e Senior") : console.log("Colaborador e presidente")