// initialize; condition; increment
for (let i = 0; i < 5; i++) {

    if (i === 1) {
        continue // salta il ciclo immediatamente
    }

    console.log("i: ", i)

    if (i === 3) {
        break // interrompe il ciclo immediatamente
    }
    // i++
}

console.log("Hello, world!")