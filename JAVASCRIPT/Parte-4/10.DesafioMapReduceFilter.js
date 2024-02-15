const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

const Add10Percent = (company => {

    company.marketValue = company.marketValue * 0.1 + company.marketValue

    return company
})

const filterCompanies = (company) => company.foundedOn < 1990

const calcularTotalMarketValue = (acc, company) => acc + company.marketValue



const newCompanies = companies

    .map(Add10Percent)
    .filter(filterCompanies)
    .reduce(calcularTotalMarketValue, 0)

console.log(newCompanies)






/*
const newCompanies = companies.map(company => {

    company.marketValue = company.marketValue * 0.1 + company.marketValue

    return company
})
.filter(company => company.foundedOn < 1990)
.reduce((acc, company) => acc + company.marketValue, 0)

console.log(newCompanies)
*/


/*
const newCompanies = companies.map(value => {

    value.marketValue = value.marketValue * 0.1 + value.marketValue

    return value
})

console.log(newCompanies)

const filterCompanies = newCompanies.filter(year => year.foundedOn < 1990)

console.log(filterCompanies)

const sumCompanies = filterCompanies.reduce((acc, sum) => acc + sum.marketValue, 0)

console.log(`O valor de mercado é ${sumCompanies}.`)
*/