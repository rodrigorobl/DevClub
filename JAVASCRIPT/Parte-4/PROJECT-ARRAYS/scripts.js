const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAllItens = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')

function formatCurrency(value) {
  const newValue = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
  return newValue
}

function showAll(productsArray){
  let myLi = ''
  productsArray.forEach( product => {
    myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price"> ${formatCurrency(product.price)}</p>
            </li> 
         `
  
  })

  list.innerHTML = myLi

}

function mapAllItens () {
  const newPrices = menuOptions.map(product => ({
    ...product, //Spread Operator  Ex.: ...product, esparrama so altera o q houve alteracao. 
    price: product.price * 0.9, //dar 10% de desconto
  
  }))

  showAll(newPrices)
  
   console.log(newPrices)
}

function sumAllItems () {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0 )
  list.innerHTML = 
   `
     <li>
       
       <p>O valor total<br> dos itens <br>é ${formatCurrency(totalValue)}</p>
     </li> 
   `
  
  console.log(totalValue)
}

function filterAllItens () {
  const filterJustVegan = menuOptions.filter(product => product.vegan === true)

  
  showAll(filterJustVegan)
  console.log(filterJustVegan)

}


buttonShowAll.addEventListener('click', () => showAll (menuOptions))
buttonMapAllItens.addEventListener('click', mapAllItens)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItens)































/*
list.innerHTML = `
          <li>
          <img src=${product.src}>
          <p>${product.name}</p>
          <p class="item-price">R$ ${product.price}</p>
          </li>
`
*/          

/*
let myLi = ''

menuOptions.forEach(product => {
    `
   <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">R$ ${product.price}</p>
    </li> 
   `
})


*/
//console.log(`${index + 1}) Nome: ${menu.name}, Preço: ${menu.price}, Vegano: ${menu.vegan}, Imagem: ${menu.src}`)








//console.log(menuOptions)