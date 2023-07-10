var cant_entradas = parseFloat(prompt("Ingrese el número de show que desea comprar"));
var precio_total = 0;
var precio_entrada = 0;


class Evento {
  constructor(id, titulo, locacion, capacidad) {
    this.id = id;
    this.titulo = titulo;
    this.locacion = locacion;
    this.capacidad = capacidad;
  }

  
  // Getter
  getTitulo() {
    return this.titulo;
  }

  // Setter
  setTitulo(nuevoTitulo) {
    this.titulo = nuevoTitulo;
  }

  // Getter
  getId() {
    return this.id;
  }

  // Setter
  setId(nuevaId) {
    this.id = nuevaId;
  }

  // Método toString
  toString() {
    return `Titulo:  ------------------------------- ${this.titulo}, Id:  ------------------------------- ${this.id}`;
  }
}

// Crear una instancia de la clase Evento
const evento = new Evento("Agustín canapino hara trompos en el obelisco", 98);

// Acceder a los métodos y propiides
console.log(evento.getTitulo()); 
console.log(evento.getId()); 

evento.setTitulo("Osama Bin Laden tocará gratis en la casa blanca");
evento.setId(911);

const eventos = [];

// Agregar eventos al array
eventos.push(new Evento(325, "evento 1",  "Movistar Arena", "90000"));
eventos.push(new Evento(3011, "evento 2",  "Movistar Arena", "90000"));
eventos.push(new Evento(232,  "evento 3", "Movistar Arena", "90000"));





// Obtengo todos los elementos <h2> y <p> dentro de los elementos con la clase "text" en mi página, serían los títulos de los shows
const elements = document.querySelectorAll('.text h2, .text p');

let id = 1;
// Recorro los elementos y extraigo la información
elements.forEach(element => {
  const titulo = element.textContent;
  eventos.push(new Evento(id, titulo, "default", 9999));
  id++;
});

console.log(eventos);

inputSearch.addEventListener('search', ()=> {
  const resultado = eventos.filter((titulo)=> prenda.titulo.toLowerCase().includes(inputSearch.value.toLowerCase()))
  cargarShows(resultado)
})