// Dictionary
const person = {
    name: "John",
    age: 30,
    weight: 88.6,
    hasDrivingLicense: true
}

const person2 = {
    name: "Alice",
    age: 25,
    weight: 55,
    hasDrivingLicense: false
}

const person3 = {
    name: "Bob",
    age: 20,
    weight: 70,
    hasDrivingLicense: false
}

const invoice = {
    company: "Rocketseat",
    description: "programming",
    address: {
        street: "Rua Guilherme Gembala",
        number: 260
    },
    amount: 3000,
    currency: "USD"
}

delete invoice.address

invoice.id = "1231sdfh7"

console.log(invoice)

invoice.amount = 1500

console.log(invoice)

// invoice = {
//     company: "Rocketseat",
//     description: "programming",
//     address: {
//         street: "Rua Guilherme Gembala",
//         number: 260
//     },
//     amount: 1500,
//     currency: "USD"
// }

console.log(invoice)

// console.log(invoice.address.street)
// console.log(person.name)