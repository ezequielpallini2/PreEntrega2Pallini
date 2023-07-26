const tableBody = document.querySelector('tbody');
const cantidadSeleccionada = document.querySelector("#numeroSeleccionado") || 1;
const eventoSelect = eventoSeleccionado;
const precioEvento = eventoSeleccionado.price;

function actualizarTotal(cantidad) {
    const total = precioEvento * cantidad;
    const totalElement = document.querySelector("#total");
    totalElement.textContent = `Total: ${total}`;
}


function mostrarEventoHTML(evento, cantidad) {
    return `<tr>
                <td>
                    <div class="div-card" style="background-image: url('${evento.imagen}'); background-size: cover;  background-color: rgba(255, 255, 255, 0.1);">
                    </div>
                </td>
                <td>
                    <tr>
                        ${evento.description}
                    </tr>
                    <tr>
                        Cantidad de entradas:
                        <select id="numeroSeleccionado">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </tr>
                    <tr id="totalRow">
                        Total:${evento.price * cantidad}
                    </tr>
                    <tr>
                        <div class="centrar-div">
                            <button class="button" id="btnComprar">COMPRAR</button>
                        </div>
                    </tr>
                </td>
            </tr>`;
}

tableBody.innerHTML = mostrarEventoHTML(eventoSelect, cantidadSeleccionada.value);

cantidadSeleccionada.addEventListener("change", function () {
    const cantidad = parseInt(cantidadSeleccionada.value);
    actualizarTotal(cantidad);
});