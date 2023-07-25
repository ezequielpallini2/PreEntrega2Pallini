const tableBody = document.querySelector('tbody')
const sectioneventos = document.querySelector('section')

function listareventosEnCarritoHTML(evento) {
    return `<tr>
                <td>${evento.id}</td>
                <td>${evento.description}</td>
                <td>$ ${evento.price.toLocaleString()}</td>
                <td>cantidad()</td>
                <td>❌</td>
            </tr>`
}

function mostrarMsgCarritoVacio() {
    return `<div class="card-error">
                <h3>El carrito está vacío</h3>
                <h4>🛒</h4>
            </div>`
}

function armarCarrito() {
    // carritoEventos.length = 0
    tableBody.innerHTML = ''
    carritoEventos.length > 0 ? carritoEventos.forEach((evento)=> tableBody.innerHTML += listareventosEnCarritoHTML(evento) )
                              : sectioneventos.innerHTML = mostrarMsgCarritoVacio()
}
armarCarrito()