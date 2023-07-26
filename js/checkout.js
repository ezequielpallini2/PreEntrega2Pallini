    const tableBody = document.querySelector('tbody');
    const cantidadSeleccionada = document.querySelector("#numeroSeleccionado") || 1;

    function mostrarEventoHTML(evento, cantidad) {
        return `<tr>
                    <td>
                        <div class="div-card" style="background-image: url('${evento.imagen}'); background-size: cover;  background-color: rgba(255, 255, 255, 0.1);">
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
                        <tr>
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

        tableBody.innerHTML = mostrarEventoHTML(eventoSeleccionado, cantidadSeleccionada);