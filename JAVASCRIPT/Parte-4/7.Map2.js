
const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false },
    { name: 'João', vip: true },
    { name: 'Bruno', vip: true },
    { name: 'Carla', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Julio', vip: false },
]



const newList = list.map((item, index, arrayOriginal) => {
    const newVip = item
    if (newVip.vip === true) {
        newVip.vip = "pulse black" 
    } else {
        newVip.vip = "pulse whith"  
    }
    return newVip
})



console.log(newList)
//console.log(list)
