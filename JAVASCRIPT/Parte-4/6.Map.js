


const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map((item, index, arrayOriginal) => {
    console.log(item +  '-> item')
    console.log (index + ' -> index')
    console.log (arrayOriginal + ' arrayOriginal')
    const newItem = item * 10
    return newItem
    console.log(newItem)
})

console.log(number)
console.log(double)


/*const double = number.map(item => item * 2) //Na mesma linha ja possui o return

console.log(number)
console.log(double)
*/