const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Julio', testGrade: 10 },
]

//const newStudents = students.filter(nota => nota.testGrade >= 5)
const newStudents = students.filter(nota => {
    
        if(nota.testGrade >= 5 && nota.testGrade % 2){
           return true
        }else{
           return false
        }

        

})

console.log(newStudents)