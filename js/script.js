
class Evento {
  constructor(id, titulo, locacion, capacidad, precio) {
    this.id = id;
    this.titulo = titulo;
    this.locacion = locacion;
    this.capacidad = capacidad;
    this.precio = precio;
  }


}


class Venta {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const eventos = [];

// Obtengo todos los elementos <h2> y <p> dentro de los elementos con la clase "text" en mi página, serían los títulos de los shows
const elements = document.querySelectorAll('.text h2, .text p');

let id = 1;
// Recorro los elementos y extraigo la información
elements.forEach(element => {
  const titulo = element.textContent;
  //Por ahora, creo los eventos con precio y locación por defecto.
  eventos.push(new Evento(id, titulo, "default", 9999, 35000));
  id++;
});

console.log(eventos);


function filtrarEventos(tituloEvento) {
  let resultado = eventos.filter((evento) => evento.titulo.toUpperCase().includes(tituloEvento.toUpperCase()));
  if (resultado.length === 0) {
    console.warn('No se encontraron eventos con dicho titulo:', tituloEvento)
    continuar = false;
  } else {
    console.table(resultado)
    continuar = true;
  }
  return continuar;
}

const carrito = [];
let precio_total = 0;
continuar = true;
let id_venta = 1;

while (continuar) {
  var evento_elegido = String(prompt("Ingrese el titulo del evento"));
  var cantidad_entradas = parseInt(prompt("Ingrese la cantidad de entradas"));

  continuar = filtrarEventos(evento_elegido);

  if (continuar) {
    let eventoEncontrado = eventos.find((evento) => evento.titulo.toUpperCase().includes(evento_elegido.toUpperCase()));
    let subtotal =  parseInt(eventoEncontrado.precio * cantidad_entradas);
    let venta = new Venta(id_venta, eventoEncontrado.titulo, subtotal);
    id_venta++;
    carrito.push(venta);

    precio_total += subtotal;
  }

  var cont = (prompt(" Ingrese 1 para seguir comprando."));
  if (cont != 1) {
    continuar = false;
  }

}

console.log(carrito);

console.log("Total del carrito: ", precio_total);










