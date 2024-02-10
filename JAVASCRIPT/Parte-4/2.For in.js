/*
Estrutura de repeticao - Loop
    - For in
*/

const users = { name: 'Rodolfo', age: 33, street: "Rua dos bobos" }

//users.name
//users['name']


for (const key in users) {
   // console.log(key + " : " + users[key])
      console.log(`${key} : ${users[key]}`)
}
