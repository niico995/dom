//1
const saludo = (mensaje) => {console.log(mensaje)}

//2
const multiplicar = (num1,num2) => {
    let resultado = num1 * num2 
    return resultado
}

//3
const array = [ 1,2,3,4,5,6,7,8,9]

const mapeo = (arreglo,funcion) => {
    let mapeado = arreglo.map(funcion)
    return mapeado
}
console.log(mapeo(array,multiplicar))



//4
function peganFuerte(cervecitas){
    let fuertes = cervecitas.sort(cervecitas.abv)
    fuertes = fuertes.slice(0,10)
    console.log(fuertes)
    return fuertes
}

peganFuerte(beers)

//5
function noPegan(cervecitas){
    let suaves = cervecitas.sort(cervecitas.ibu).reverse()
    suaves = suaves.slice(0,10)
    console.log(suaves)
    return suaves
}

noPegan(beers)


//6
function buscada(cervezas,nombre) {
    let encontrada = 'Not found'
    for(let cerveza of cervezas){
        if(cerveza.name === nombre){
            encontrada = cerveza
        }
    }
    console.log(encontrada)
    return encontrada
}

buscada(beers,'Buzz')

//7
function findIbu(cervezas,ibu){
    let mensaje = `There is no beer with an ibu of ${ibu}`
    for(let cerveza of cervezas){
        if(cerveza.ibu == ibu){
            mensaje = cerveza
        }
    }
    
    console.log(mensaje)
    return mensaje
}


findIbu(beers,45)


//8
function findBeer(cervezas,nombre){
    let mensaje = `${nombre} does not exist`
    for(let i=0;i<cervezas.length;i++){
        if(cervezas[i].name == nombre){
            mensaje = `La cerveza se encuentra en la posición ${i+1} del arreglo`
        }
    }
    console.log(mensaje)
    return mensaje
}

findBeer(beers,'Alpha Dog')


//9
function suavecitas(beers,valormaximo){
    let suavecitas = []
    for(let beer of beers){
        if(beer.abv <= valormaximo){
            const suave = {
                name: beer.name,
                abv: beer.abv,
                ibu: beer.ibu
            }
            suavecitas.push(suave)
        }
    }
    console.log(suavecitas)
    return suavecitas
}

suavecitas(beers,8)


//10
function ordenadas(cervezas,valor,bolean) {
    const orden = cervezas.sort((a,b) => {
        if(bolean){
            return a[valor]-b[valor]
        }else {
            return b[valor]-a[valor]
        }
    })
    console.log(orden.slice(0,10))
    return orden.slice(0,10)
}

ordenadas(beers,'abv',true)


//11
//Traigo la tabla para manipular
const tabla = document.getElementById('cuerpoTabla')
console.log(tabla)

//Doy forma de como ir mandando los elementos armados
function armandoFilas(beers){
    const tr = document.createElement('tr')

    const tdName = document.createElement('td')
    const tdAbv = document.createElement('td')
    const tdIbu = document.createElement('td')

    tdName.textContent = beers.name
    tdName.classList.add('mi-clase')
    tdAbv.textContent = beers.abv
    tdIbu.textContent = beers.ibu
    
    tr.append(tdName,tdAbv,tdIbu)

    return tr
}

//saco los datos de la lista y los mando a la función anterior para llenar los datos reales
function llenarConDatos(cervezas, tabla){
    let fragmento = document.createDocumentFragment()

    for(cerveza of cervezas){
        const tr = armandoFilas(cerveza)
        fragmento.appendChild(tr)
        tabla.appendChild(fragmento)
    }
    
}

llenarConDatos(beers,tabla)