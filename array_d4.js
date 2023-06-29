// Array

// Gli array sono speciali tipi di oggetti che possiamo immaginare come una lista di valori
// La sintassi è:
let array = [1, 2, 3, 4, 5]

// Gli array hanno una proprietà .length che identifica la lunghezza della nostra lista

console.log(array.length)


let lista = [
    1,  // 0
    "2", // 1
    { three: 3 }, // 2
    [
        4, // 0
        5  // 1
    ] // 3
]

// recupero il primo elemento della lista

// console.log(lista[0])

// recuperiamo il secondo elemento della lista e stamparne il tipo
// console.log(typeof lista[1])


// console.log(lista[3][1]);



// Array con elementi complessi
let students = [
    {
        name: "Paulina",
        note: 5
    },
    {
        name: "Alex",
        note: 4
    },
    {
        name: "Diana",
        note: 4
    }
]

// console.log(students.map(student => student.name + 1))
// come possiamo stampare "Alex"
// console.log(students[0].name)
// console.log(students[1].name)
// console.log(students[2].name)



let matrix = [
    [1, 2, 3], // 0
    [
        4, // 0
        5, // 1
        6
    ], // 1
    [
        7, // 0
        8, // 1
        9  // 2
    ] // 2
]


// come possiamo stampare il 5
// console.log(matrix[1][1])
// come possiamo stampare 8
// console.log(matrix[2][1])



// Metodi degli Array
// Un metodo è una procedura che ci è a nostra disposizione per elaborare gli array

// La sintassi è la seguente:

// .concat
// Concatenazione di elementi // non-mutating

const frutti = ["mela", "banana", "ananas"]
const frutti2 = ["pera", "arancia", "arancia", "arancia", "arancia", "uva"]


const totaleFrutti = frutti.concat(frutti2)

console.log(totaleFrutti[3]) //pera)

// [
//     "mela", // 0
//     "banana", //1
//     "ananas", //2
//     "pera", // 3
//     "arancia", //4
//     "arancia", //5
//     "arancia", //6
//     "arancia", //7
//     "uva"
// ]

// .indexOf // non-mutating
// "Indice di", ovvero risponde alla domanda: a che indice trovo un tale elemento x?
// Tenendo come esempio il nostro "totaleFrutti", possiamo usare questo metodo
// per recuperare l'indice di un frutto 

const indiceDiFrutto = totaleFrutti.indexOf("arancia")

console.log(indiceDiFrutto)

// se il nostro frutto NON è in lista
// indexOf è -1




// .lastIndexOf // non-mutating
// Restituisce l'ultimo indice al quale si trova l'elemento richiesto
const ultimoIndiceDiFrutto = totaleFrutti.lastIndexOf("arancia")

console.log(ultimoIndiceDiFrutto)

// .pop() // Mutating
// "Pop" rimuove l'ultimo elemento dell'array

const numeri = [1, 2, 3, 4, 5]
const result = numeri.pop() // result è 5

console.log(numeri) // [1, 2, 3, 4]


// Come possiamo recuperare l'ultimo elemento dell'array
// SENZA toglierlo con .pop()?

// Sapendo che numeri.length è 4
console.log(numeri.length) // 4
console.log(numeri[numeri.length - 1]) // restituisce l'ultimo senza rimuoverlo

// .push // Mutating
// "Push" aggiunge elementi in coda all'array

totaleFrutti.push("kiwi", "mango")

console.log(totaleFrutti)

// .slice // non-mutating
// "slice" seleziona una porzione di array delimitata da due indici

console.log(numeri.slice(1, 3)) // 1 è incluso e 3 è escluso
// quindi [1,2,3,4] => [2,3]

// .includes // non-mutating
// "includes" restituisce se un elemento è presente o meno nell'array
// È esattamente come 
// array.indexOf("X") !== -1 // true or false
// => possiamo scrivere più compatto 
// array.includes("X") // true or false

console.log(totaleFrutti.includes("papaya"))



// .join() // non-mutating
// "join" restituisce una STRINGA che unisce tutti gli elementi dell'array.
// Possiamo specificare manualmente un carattere separatore oppure, di predefinito,
// utilizzera la virgola

console.log(totaleFrutti.join("🍕"))


// .splice() // mutating
// "splice" ci consente di modificare il nostro array rimuovendone gli elementi
// all'indice X ed eventualmente di aggiungere degli altri elementi al loro posto

// Rimuoviamo le arance all'indice 5,6,7
totaleFrutti.splice(5, 3)
console.log(totaleFrutti) // e abbiamo fatto fuori tre arance

