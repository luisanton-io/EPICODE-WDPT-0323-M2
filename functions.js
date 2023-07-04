// Una funzione è un blocco di codice riutilizzabile che possiamo
// chiamare in un secondo momento fornendo gli opportuni input.

// var myAge = 25

function sum(a, b) { // a, b sono gli "input", 
    // ovvero i parametri (parameters) della funzione
    return a + b
}

function sayHello() {
    // void functions: 
    // funzioni che per la loro struttura non restituiscono nulla
    console.log("ciao")
    // implicitamente:
    // return undefined
}

const risultato = sayHello()

console.log(risultato)

// var myAge = 35

function isLegalAge(age) {
    return age >= 18
}

function unFruttoACaso() {
    const tuttiFrutti = [
        'mela', // 0
        'banana', //1
        'ananas',
        'pera',
        'arancia',
        'uva',
        'kiwi',
        'mango'
    ]

    const randomIndex = Math.floor(Math.random() * tuttiFrutti.length)

    return tuttiFrutti[randomIndex]
}

console.log(unFruttoACaso())


// Per chiamare la nostra funzione, abbiamo bisogno di
// utilizzare la sintassi fx().

// Tra le parentesi, andiamo a passare i valori per inizializzare
// i nostri parametri. Tali valori prendono il nome di argomenti.
const result = sum(5, 3)

// console.log(result)

// console.log(isLegalAge(sum(15, 3))) // false
// console.log(15 + 3 >= 18) // false

// console.log(sum("ciao", "mondo")) // "ciaomondo"



// let vs var

// function isLegalAge2(age) {

//     if (age >= 18) {
//         if (true) {
//             var result = age >= 18
//         }
//     }

//     console.log(result)

//     return result
// }

// console.log(isLegalAge2(15))