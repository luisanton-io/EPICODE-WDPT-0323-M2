function traduci() {
    // Questa funzione tradurrà il titolo del nostro progetto.
    // Vado a selezionare il nostro elemento
    // document.getElementById('title')

    // La proprietà innerHTML rappresenta il contenuto, ed è modificabile
    document.getElementById('title').innerHTML = 'Ciao, mondo!'
}

function greet(name) {
    document.getElementById('greeting').innerHTML += name
}

function addElement() {
    // Creiamo un elemento <li> e lo assegniamo alla nostra variabile 'newEl'
    const newEl = document.createElement('li')

    // newEl ora non contiene nulla, è solo un elemento vuoto:
    // <li></li>

    // Quindi andiamo a inserire il contenuto del nostro elemento
    newEl.innerHTML = 'new element'

    // Applichiamo classe 'red'
    newEl.className = 'red'

    // Adesso il nostro elemento contiene la stringa
    // <li>new element</li>

    // Finalmente possiamo andare a recuperare la lista
    const lista = document.querySelector('ul:last-of-type')

    // console.log(lista)

    // Infine, andiamo ad aggiungere il nostro elemento newEl
    // in coda alla lista.
    lista.appendChild(newEl)
}

function addElementWithInnerHTML() {
    document.querySelector('ul:last-of-type').innerHTML += '<li>new element</li>'
}

function removeElement() {
    const allItems = document.querySelector('ul:last-of-type').children

    console.log(allItems[allItems.length - 1])

    allItems[allItems.length - 1].remove()
}