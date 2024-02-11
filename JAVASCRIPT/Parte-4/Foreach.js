/*

    ForEach (item, index, array)

*/

let users = [
    { name: 'Rodolfo', age: 33, number: '(19) 94343-3434' },
    { name: 'Paulo', age: 44, number: '(19) 94343-3434' },
    { name: 'Aline', age: 22, number: '(19) 94343-3434' },
    { name: 'Maria', age: 12, number: '(19) 94343-3434' },
]

users.forEach(function (item, index) {
   
    console.log(`${index + 1}) Nome: ${item.name}, idade: ${item.age}, Numero: ${item.number}`)
    
        
});
