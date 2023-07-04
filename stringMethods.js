const lorem = "Lorem Ipsum"
console.log(lorem[3])
console.log(lorem[lorem.length - 1]) // ultimo carattere

// .toUpperCase() .toLowerCase()
// Metodo che restituisce una stringa con tutti i caratteri 
// in maiuscolo o minuscolo
console.log(lorem.toUpperCase())
console.log(lorem.toLowerCase())


console.log(lorem)




// .includes()
// Metodo che restituisce un booleano che indica se una stringa
// contiene o meno un'altra stringa


console.log("LOrEM iPSuM".toLowerCase())
console.log("iPsUm".toLowerCase())

// console.log(toLowerCase("LOrEM iPSuM"))

console.log("LOrEM iPSuM".toLowerCase().includes("iPsUm".toLowerCase())) // true


// .concat()
// Metodo che concatena due stringhe
console.log("ciao".concat(" mondo")) // "ciao mondo"
console.log("ciao" + " mondo") // "ciao mondo"

// .repeat()
// Metodo che ripete una stringa un certo numero di volte
console.log("ciao".repeat(3)) // "ciaociaociao"

// .replace()
// Metodo che sostituisce una sottostringa con un'altra
console.log("ciao mondo mondo".replace("mondo", "pianeta")) // "ciao pianeta mondo"

// .replaceAll()
// Metodo che sostituisce tutte le occorrenze di una sottostringa con un'altra
console.log("ciao mondo mondo".replaceAll("mondo", "pianeta")) // "ciao pianeta pianeta"

// Per cambiare l'ultimo a partire dalla fine (eventualità piuttosto rara)

console.log("ciao mondo mondo".lastIndexOf("mondo")) // 11


// .slice()
// Metodo che restituisce una sottostringa a partire da un indice
// fino a un altro indice
console.log("ciao mondo mondo".slice(0, 11) + "pianeta") // 