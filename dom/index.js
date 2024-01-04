let titulo = document.getElementById("mainTitle")

console.log(titulo)

let tituloPrincipal = `<h1 class="text-4xl m-4 italic">Frutas</h1>`


titulo.innerHTML = tituloPrincipal


let anaranjado = document.querySelectorAll('.anaranjado')
console.log(anaranjado)


function colorcitos(elementos){
    for(color of elementos){
        color.className = "bg-orange-500"
    }
}

colorcitos(anaranjado)


const personalData = 'Fernando Juárez | Cohort N° 53'

let footerText = document.querySelector('footer p')
console.log(footerText)

footerText.innerHTML = personalData



let container = document.getElementById('contenedor')
console.log(container)


function cardStructure(frutas){
    return `<div class='flex flex-col items-center text-center justify-center shadow-xl max-w-96 max-h-fit border-2 border-amber-700 rounded-xl p-1'>
<h3>${frutas.nombre}</h3>
<img class="h-60 object-contain" src="${frutas.foto}" alt="Foto de fruta"/>
<p>${frutas.descripcion}</p>
</div>`
}


function llenarCards(frutas){
    let mostrador = ""
    for(let fruta of frutas){
        mostrador += cardStructure(fruta)
    }
    return mostrador
}

container.innerHTML = llenarCards(frutas)


const listado = document.getElementById('lista')
console.log(listado)

let tituloLista = `<h1 class='text-3xl m-2 mt-5 italic'>Frutras Dulces</h1>`

listado.innerHTML = tituloLista


function frutitas(fruits){
    let ul = document.createElement('ul')
    let liInfo
    for(fruta of fruits){
        if(fruta.esDulce){
            let li = document.createElement("li")
            liInfo = fruta.nombre
            li.appendChild(document.createTextNode(liInfo))
            listado.appendChild(li)
        }
    }
}

let listadoFrutasDulces = frutitas(frutas)

console.log(listadoFrutasDulces)