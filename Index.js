/*El 1er método para computadores. 
•Tomar un numero cualquiera de 4 dígitos y asignarlo como semilla (1er elemento de la serie), 
luego se lo debe elevar al 2 y obtener un numero de 8 cifras (si la cantidad de cifras es < 8, (se lo debe completar con 0 a la izquierda). 
•Posteriormente se deben desechar los 2 primeros y los 2 últimos dígitos: Tomar solamente los  
dígitos centrales y asignarlo como el siguiente elemento de la sucesión. 
•Basta solo con repetir el procedimiento para obtener la cantidad de números aleatorios necesarios.  
Generar un programa en un lenguaje de programación, utilizando el método Von Newman, 
para  generar números aleatorios. muestre a través de un ciclo para una lista de los primeros 50 números aleatorios. */


function neumann(seed) {

    if(isNaN(seed)) return;

    seed = Math.pow(seed,2)
    let newSeed = seed.toString()

    if (newSeed.length <8 ) {
        while (newSeed.length < 8) {
            newSeed = "0" + newSeed
        }
    }

    newSeed = newSeed.substring(2,6)
    return parseInt(newSeed)
}


function agregarLista(h, pipo) { 
    const lista = document.getElementById ("esmach")
    let nuevaFila = document.createElement ("tr")
    let indice = document.createElement("th")
    let numero = document.createElement ("td")

    let oajaca = document.createTextNode(h)
    let guanajuato = document.createTextNode (pipo)
    
    indice.appendChild(oajaca)
    numero.appendChild(guanajuato)

    nuevaFila.appendChild(indice)
    nuevaFila.appendChild(numero)

    lista.appendChild(nuevaFila)
}


function revisarEntrada() {
    let valor = parseInt(document.getElementById("toto").value)
    return isNaN(valor)? alert("Solo se pueden introducir numeros (no letras ni espacios vacios)") : valor
}


function generarNumero() {
    let seed = revisarEntrada()

    if (seed.toString().length < 4 || seed.toString().length > 4){
        alert("Solo se pueden ingresar numeros de cuatro cifras")
        limpiarCampos()
        return
    }

    let lista = [seed]

    for (let index = 0; index < 49; index++) {
        lista.push (neumann(lista[index]))   
    }

    let h = 1
    lista.forEach(mamarre => {
        agregarLista (h, mamarre)
        h++
    })
}


function limpiarCampos() {  
    location.reload()
}
