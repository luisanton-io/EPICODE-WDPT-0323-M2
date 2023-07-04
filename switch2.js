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

// let frutto = []

// frutto.push('mela')

// console.log(frutto) // ["mela"]

// let frutto

for (let i = 0; i < tuttiFrutti.length; i++) {
    const frutto = tuttiFrutti[i] // 'ananas'
    switch (frutto) { // "mela"
        case "mela":
            // Essendo vero:
            console.log("🍎")
            break;
        case "banana":
            console.log("🍌")
            break;
        case "ananas":
            console.log("🍍")
            break;
        case "pera":
            console.log("🍐")
            break;
        case "arancia":
            console.log("🍊")
            break;
        case "uva":
            console.log("🍇")
            break;
        case "kiwi":
            console.log("🥝")
            break;
        case "mango":
            console.log("🥭")
            break;
    }
}


// frutto  undefined
