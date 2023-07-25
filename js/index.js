// Acceso al DOM, aquí :)
const eventosEnCarrito = document.querySelector('span#eventosEnCarrito')
const container = document.querySelector('div#container.container')
const inputSearch = document.querySelector('input#inputSearch')

function mostrarTotalProdsEnCarrito() {
    eventosEnCarrito.textContent = carritoEventos.length
}

carritoEventos.length > 0 && mostrarTotalProdsEnCarrito()

function retornarCardError() {
    return `<div class="card-error">
                <h2>Houston, tenemos un problema</h2>
                <h3>Vuelve a intentar en unos minutos...</h3>
                <h4>⏳</h4>
            </div>`
}


function retornarCardHTML({ id, imagen, description, price } = evento ) {
   return `<div class="div-card" style="background-image: url('${imagen}'); background-size: cover;">
                <div class="evento">
                    <p>${description}</p> 
                </div>
                <div class="prenda">
                    <p>$ ${price}</p>
                </div>
                <div class="comprar"><button class="button button-outline button-add" id="${id}">comprar</button></div>
           </div>`
}

function activarClickEnBotones() {
    const botones = document.querySelectorAll('button.button.button-outline.button-add')
    botones.forEach((boton)=> {
        boton.addEventListener('click', ()=> {
            let evento = arrayeventos.find((evento)=> evento.id === parseInt(boton.id))
            carritoEventos.push(evento)
            localStorage.setItem('carritoEventos', JSON.stringify(carritoEventos))
            mostrarTotalProdsEnCarrito()
        })
    })
}

function cargareventos(array) {
    container.innerHTML = ""
    array.forEach((evento)=> container.innerHTML += retornarCardHTML(evento) )
    activarClickEnBotones()
}

//función principal que cargar (o no) los eventos en el HTML
arrayeventos.length > 0 ? cargareventos(arrayeventos) : container.innerHTML = retornarCardError()

inputSearch.addEventListener('search', ()=> {
    localStorage.setItem("ultimaBusqueda", inputSearch.value)
    const resultado = arrayeventos.filter((evento)=> evento.description.toLowerCase().includes(inputSearch.value.toLowerCase()))
    cargareventos(resultado)
})
