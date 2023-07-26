// Acceso al DOM, aquí :)
const container = document.querySelector('div#container.container')
const inputSearch = document.querySelector('input#inputSearch')

function retornarCardError() {
    return `<div class="card-error">
                <h2>Houston, tenemos un problema</h2>
                <h3>Vuelve a intentar en unos minutos...</h3>
                <h4>⏳</h4>
            </div>`
}


function retornarCardHTML({ id, imagen, description, price } = evento) {
    return `<div class="div-card" style="background-image: url('${imagen}'); background-size: cover;  background-color: rgba(255, 255, 255, 0.1);">
                <div class="evento">
                    <p>${description}</p> 
                </div>
                <div class="prenda">
                    <p>$ ${price}</p>
                </div>
                <a href="checkout.html" ><button class="button button-outline button-add" id="${id}" >comprar</button></a>
           </div>`
}
function activarClickEnBotones() {
    const botones = document.querySelectorAll('button.button.button-outline.button-add');
    botones.forEach((boton) => {
        console.log(boton);
        boton.addEventListener('click', () => {
            console.log(boton.id);

            let evento = arrayeventos.find((evento) => parseInt(evento.id) === parseInt(boton.id));
            
            console.log(evento.id);
            localStorage.setItem('eventoSeleccionado', JSON.stringify(evento));
            console.log(evento);
        });
    });
}



function cargareventos(array) {
    container.innerHTML = ""
    array.forEach((evento) => container.innerHTML += retornarCardHTML(evento))
    activarClickEnBotones();
}

//función principal que cargar (o no) los eventos en el HTML
arrayeventos.length > 0 ? cargareventos(arrayeventos) : container.innerHTML = retornarCardError()

inputSearch.addEventListener('search', () => {
    localStorage.setItem("ultimaBusqueda", inputSearch.value)
    const resultado = arrayeventos.filter((evento) => evento.description.toLowerCase().includes(inputSearch.value.toLowerCase()))
    cargareventos(resultado)
})
