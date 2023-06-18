var cant_entradas = parseFloat(prompt("Ingrese la cantidad de entradas que desea comprar"));
var precio_total = 0;
var precio_entrada = 0;

get_entradas();

function get_entradas() {
  for (let i = 1; i <= cant_entradas; i++) {
    precio_entrada = entrada_elegido(i);
    precio_total = precio_total + precio_entrada;
    alert("El precio de la entrada número " + i + " es de " + precio_entrada + " y el precio total de su compra es de " + precio_total + ". Le faltan " + (cant_entradas - i) + " entradas");
  }

  console.log("El precio total de la compra actualmente es de " + precio_total);

  if (precio_total > 5000) {
    alert("¡Su compra supera los 5000 pesos! Deberá utilizar otra tarjeta de crédito para seguir comprando");
  }

  alert("El precio total de su compra final es de " + precio_total);
  console.log("El precio total de la compra final es de " + precio_total);
}

function entrada_elegido(i) {
  let continuar = false;
  let precio_entrada = 0;

  do {
    let elegir_entrada = prompt("Ingrese el número del show a comprar, del 1 al 6.");

    if (elegir_entrada <= 6 && elegir_entrada >= 1) {
      alert("Eligió la entrada " + elegir_entrada);
      precio_entrada = obtener_precio_entrada(elegir_entrada, i);
      continuar = true;
    } else {
      alert("No existe la entrada " + elegir_entrada);
    }
  } while (continuar !== true);

  return precio_entrada;
}

function obtener_precio_entrada(elegir_entrada, i) {
  const precios_entradas = {
    "1": 3500,
    "2": 2200,
    "3": 2000,
    "4": 4000,
    "5": 1000,
    "6": 1500
  };

  if (precios_entradas.hasOwnProperty(elegir_entrada)) {
    const precio = precios_entradas[elegir_entrada];
    console.log(`El precio del show ${i} es de $ ${precio}`);
    return precio;
  } else {
    console.warn("No eligió un show válido");
    return null;
  }
}
