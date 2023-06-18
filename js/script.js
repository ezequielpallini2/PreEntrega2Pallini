var cant_productos = parseFloat(prompt("Ingrese la cantidad de entradas que desea comprar"));
var precio_total = 0;
var valor_producto = 0;

consultar_productos();

function consultar_productos() {
  for (let i = 1; i <= cant_productos; i++) {
    valor_producto = producto_elegido(i);
    precio_total = precio_total + valor_producto;
    alert("El precio de la entrada número " + i + " es de " + valor_producto + " y el valor total de su compra es de " + precio_total + ". Le faltan " + (cant_productos - i) + " productos");
  }

  console.log("El precio total de la compra actualmente es de " + precio_total);

  if (precio_total > 5000) {
    alert("¡Su compra supera los 5000 pesos! Deberá utilizar otra tarjeta de crédito para seguir comprando");
  }

  alert("El precio total de su compra final es de " + precio_total);
  console.log("El precio total de la compra final es de " + precio_total);
}

function producto_elegido(i) {
  let continuar = false;
  let valor_producto = 0;

  do {
    let elegir_producto = prompt("Ingrese el número del show a comprar, del 1 al 6.");

    if (elegir_producto <= 6 && elegir_producto >= 1) {
      alert("Eligió el producto " + elegir_producto);
      valor_producto = obtener_precio_producto(elegir_producto, i);
      continuar = true;
    } else {
      alert("No existe el producto " + elegir_producto);
    }
  } while (continuar !== true);

  return valor_producto;
}

function obtener_precio_producto(elegir_producto, i) {
  const precios_productos = {
    "1": 3500,
    "2": 2200,
    "3": 2000,
    "4": 4000,
    "5": 1000,
    "6": 1500
  };

  if (precios_productos.hasOwnProperty(elegir_producto)) {
    const precio = precios_productos[elegir_producto];
    console.log(`El precio del show ${i} es de $ ${precio}`);
    return precio;
  } else {
    console.warn("No eligió ninguno de nuestros productos");
    return null;
  }
}
