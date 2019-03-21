// 1. What is the average price of all items ?
var count = items.length
var priceArr = items.map(function (unit) {
    return unit.price
})
var totPrice = items.reduce(function (a, b) {
    return a + b.price
}, 0)
var avg = totPrice / count

document.querySelector('#answer1').innerHTML = `The average price for all items is $${avg.toFixed(2)}.`


// 2. Show me an array of items that cost between $14.00 and $18.00 USD ?
var usdArr = items.filter(function (unit) {
    return unit.currency_code === "USD"
})
var between = usdArr.filter(function (unit) {
    if (unit.price > 14.00 && unit.price < 18.00) {
        return true
    }
})
var titles1 = between.map(function (unit) {
    return unit.title
})

document.querySelector('#answer2').innerHTML = `${titles1.join(" \n\n")}`


// 3. Which item has a "GBP" currency code ? Display it's name and price.
var gbpArr = items.filter(function (unit) {
    return unit.currency_code === "GBP"
})
var titles2 = gbpArr.map(function (unit) {
    return unit.title
})

document.querySelector('#answer3').innerHTML = `${titles2.join()} costs £18.00.`


// 4. Display a list of all items who are made of wood.
var woodArr = items.filter(function (unit) {
    return unit.materials.includes('wood')
})

var titles3 = woodArr.map(function (unit) {
    return unit.title
})

document.querySelector('#answer4').innerHTML = `${titles3.join(" is made of wood.\n\n")} is made of wood.`


// 5. Which items are made of eight or more materials ? Display the name, number of items and the items it is made of.
var matsArr = items.filter(function (unit) {
    return unit.materials.length >= 8
})
var mat8Arr = matsArr.map(function (unit) {
    return `${unit.title} has ${unit.materials.length} materials:\n${unit.materials.join('\n')
        } \n\n`
})

document.querySelector('#answer5').innerHTML = `${mat8Arr.join('\n')}`


// 6. How many items were made by their sellers ?
var makeArr = items.filter(function (unit) {
    return unit.who_made.includes('i_did')
})
var made = makeArr.length

document.querySelector('#answer6').innerHTML = `${made} were made by their sellers.`
