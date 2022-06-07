// // this is my function that sums two numbers
// const sum = (a,b) => {
//     return a + b
// }

// // just a console log for ourselves.
// console.log(sum(7,3))

// // export the function to be used on other files 
// // (similar to the keyword `export` when using webpack)
// module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function eurosToDollars(amountInEuros){
    let amountInDollars = amountInEuros * 1.2
    // return `you give me ${amountInEuros} euros and I will pay you ${amountInDollars} dollars`
    return amountInDollars
}
console.log(eurosToDollars(10))

function dollarsToEuros(amountInDollars){
    let resultInEuros = amountInDollars / 1.2
    return resultInEuros
    // return `you give me ${amountInDollars} dollars and I will pay you ${resultInEuros} Euros`
}
console.log(eurosToDollars(10))

function dollarsToYen(amountInDollars){
    let dollarYen = dollarsToEuros(amountInDollars) * 127.9
    let resultInYen = Math.floor(dollarYen)
    return resultInYen
    // return `you give me ${amountInDollars} dollars and I'll pay you ${resultInYen} Yen`
}

function yenToEuro (amountInYen){
    let yenEuro = (amountInYen / 127.9)
    return yenEuro
}

function yenToPound(amountInYen){
    let yenPounds = yenToEuro(amountInYen) * .8
    return yenPounds
}

module.exports = {dollarsToYen, eurosToDollars, yenToPound};

console.log(yenToPound(1000))