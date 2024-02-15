
const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Julio', testGrade: 10 },
]
const newStudents = students.map((studant) => {
    return {
        name: studant.name,
        result: studant.testGrade >= 5 ? 'Aprovado' : 'Reprovado',
    }
})
console.log(newStudents)

/*---------------------------------------------------------------
let result = nota.testGrade

if(result >= 5){
    result = "Aprovado"
} else {
    result = "Reprovado"
}

const newNota = {
    name: nota.name,
    result: result
}

return newNota
})
console.log(newStudents)
*/
/*----------------------------------------------------------------
const notaFinal = nota
if(notaFinal.testGrade >= 5){
    notaFinal.testGrade = "Aprovado"
 
}else {
    notaFinal.testGrade = "Reprovado"
}

return notaFinal 

 
})
console.log(newStudents)
*/


/*--------------------------------------------------------------------------------
const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false },
    { name: 'João', vip: true },
    { name: 'Bruno', vip: true },
    { name: 'Carla', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Julio', vip: false },
]

const newList = list.map((user) => {
    return {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green',
    }
})
console.log(newList)
*/

/*------------------------------------------------------------------------------------
const newList = list.map((item, index, arrayOriginal) => {
    const newVip = item
    if (newVip.vip === true) {
        newVip.vip = "bracelet black" 
    } else {
        newVip.vip = "bracelet green"  
    }
    return "Name: "+ newVip.name + ", will use: " + newVip.vip
    
})

console.log(newList)
//console.log(list)
*/