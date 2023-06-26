let isCustomerRegistered = true

// isCustomerRegistered = false

let amount = 100
let discount = 10

// truthy
const username = ""
let zuccheroBianco = null
if (!zuccheroBianco) { // true or false
    console.log("I am truthy")
} else {
    console.log("I am falsy")
}

// falsy
// i valori
// false, NaN, 0, "", null, undefined



if (isCustomerRegistered) {
    amount = amount - discount
    console.log("macarena")
} else {
    console.log("mambo")
}

console.log(amount)