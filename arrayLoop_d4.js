// Vediamo ora come iterare nella lista con un ciclo
// e recuperare gli elementi indice per indice


const tuttiFrutti = [
    'mela', // 0
    'banana',
    'ananas',
    'pera',
    'arancia',
    'uva',
    'kiwi',
    'mango'
]

// 0, mela
// 1, banana

console.log(tuttiFrutti.length)

for (let i = 0; i < tuttiFrutti.length; i++) {
    const frutto = tuttiFrutti[i]
    console.log(i, frutto)
}

// for (let frutto of tuttiFrutti) {
//     console.log(frutto)
// }

// console.log(0, tuttiFrutti[0])
// console.log(1, tuttiFrutti[1])
// console.log(2, tuttiFrutti[2])
// console.log(3, tuttiFrutti[3])
// console.log(4, tuttiFrutti[4])
// console.log(5, tuttiFrutti[5])
//........
// console.log(tuttiFrutti.length), tuttiFrutti[tuttiFrutti.length -1])