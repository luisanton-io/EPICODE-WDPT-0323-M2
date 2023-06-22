let height = "140"

// console.log(parseInt("140") === 140)
// console.log("140" != 140) // il primo valore è diverso dal secondo
// console.log("140" !== 140) // il primo valore è diverso dal secondo (tipo incluso)?


const giostra = (height >= 140) && (height < 170)

// const giostra = true && false = false
const gelato = !giostra

console.log("Gelato", gelato)
console.log("Giostra", giostra)

const pianti = !(giostra || gelato)
console.log("Pianti", pianti)

