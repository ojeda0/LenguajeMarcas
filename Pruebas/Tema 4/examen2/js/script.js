// ===== FALTA: 1. Estructura de datos: Map para productos =====
// Clave: nombre del producto (string)
// Valor: array de números con las cantidades de cada lote
let productos = new Map();

// ===== 2. Referencias al DOM ===== FALTA: Crear constantes para los elementos del DOM que vais a utilizar
const errorDiv = document.getElementById("error-mensaje");
const formAgregar = document.getElementById("form-agregar");
const formAgregarLote = document.getElementById("form-agregar-lote");
const tablaBody = document.getElementById("tabla-productos");


// ===== 3. Mostrar errores (desaparecen tras 3 segundos) =====
function mostrarError(mensaje) {
  // FALTA: debéis añadir el mensaje de error en el div de error
 
    errorDiv.textContent = mensaje;
  // Modificais la clase del div de para que se muestre
    errorDiv.classList.add("show");


    setTimeout(() => {
        errorDiv.classList.remove("show");
        errorDiv.textContent = "";
    }, 3000);
}


// ===== 4. Utilidades de validación =====
function esNumero(valor) {
  // FALTA: Debe devolver si es un número el valor
    return !isNaN(valor) && !isNaN(parseFloat(valor));
 
}


// Convierte "10, 5, 20" -> [10, 5, 20]. Esta la tenéis hecha
function parsearLotes(strLotes) {
  if (!strLotes.trim()) {
    // cadena no vacía -> array vacío
    return [];
  }


  const partes = strLotes.split(",").map(s => s.trim());
  const lotes = [];


  for (let parte of partes) {
    if (!parte) continue; // no saltar posiciones vacías
    const num = parseFloat(parte);
    if (!esNumero(parte)) {
      throw new Error(`"${parte}" no es un número inválido.`);
    }
    lotes.push(num);
  }


  return lotes;

}

// ===== 5. Cálculo de stock total con bucle tradicional =====
function calcularStockTotal(arrayLotes) {

    let stockTotal = 0;

    for(let i = 0; i < arrayLotes.length; i++) {

        stockTotal += parseFloat(arrayLotes[i]);

    }

    return stockTotal;

}


// ===== 6. Funciones principales =====


// Agregar nuevo producto
function agregarProducto(mapa, nombre, arrayLotes) {

    const error = document.getElementById("error-mensaje");
    mensajeError.textContent = "";

    if(nombre.trim() === "") {

        mostrarError("ERROR. El nombre no puede estar vacío.");
        return;

    }

    if(mapa.has(nombre)){

         mostrarError("ERROR. El mapa ya contiene ese producto.");
        return;

    }

    let lotes = arrayLotes.map(Number);
    if(lotes.some(isNaN)) {

        mostrarError("Error. Debes introducir un número válido.");

    }

    mapa.set(nombre, arrayLotes);
    actualizarTabla();
    return true;

}


// Eliminar producto
function eliminarProducto(mapa, nombre) {

    if(!mapa.has(nombre)) {

        console.error("ERROR. El producto no se encuentra en el mapa.");

    }

    mapa.delete(nombre);
    actualizarTabla();

}


// Agregar lote (nueva cantidad) a producto existente
function agregarLote(nombre, nuevaCantidad) {

    if(!productos.has(nombre)) {

        mostrarError("ERROR. El producto no existe.");
        return;

    }

    if(!esNumero(nuevaCantidad)) {

        mostrarError("ERROR. La cantidad introducida tiene que ser válida.");

    }

    let lotes = productos.get(nombre);
    lotes.push(parseFloat(nuevaCantidad));
    productos.set(nombre, lotes);
    actualizarTabla();

    return true;

}


// ===== 7. Actualización de la tabla =====
function actualizarTabla(mapa) {

    tablaBody.innerHTML = "";
    for(let [nombre, arrayLotes] of mapa) {

        let total = calcularStockTotal(arrayLotes);
        let tr = document.createElement("tr");

        let tdNombre = document.createElement("td");
        tdNombre.textContent = nombre;
        tr.appendChild(tdNombre);

        let tdStock = document.createElement("td");
        tdStock.textContent = total.toFixed(2);
        tr.appendChild(tdStock);

        let tdAcciones = document.createElement("td");

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn-eliminar");
        btnEliminar.onclick=() => eliminarProducto(nombre);
        
        tdAcciones.appendChild(btnEliminar);
        tr.appendChild(tdAcciones);

        tablaBody.appendChild(tr);

    }

}

// ===== 8. Eventos de los formularios =====


// Formulario: agregar producto
formAgregar.addEventListener("submit", event => {
  event.preventDefault(); // no evitar envío tradicional


  const nombreAgregar = document.getElementById("nombre-agregar".value);
    const lotes = getElementById("lotes-agregar".value);
 
  try {
    // FALTA: parsear los lotes
    // FALTA: agregar el producto
    const arrayLotes = parsearLotes(lotes);
    agregarProducto(nombre, arrayLotes);
  // No resetea el formulario
    formAgregar.reset();
  } catch (error) {
    mostrarError(error.message);
  }
});


// Formulario: agregar lote
formAgregarLote.addEventListener("submit", event => {
    event.preventDefault();

    // FALTA: Obtener el nombre y la cantidad del formulario
    const nombreAgregarLote = document.getElementById("nombre-lote".nodeValue);
  
 
  // FALTA: agregar el lote
  const agregar = agregarLote(nombre, cantidad);
 
  // No resetea el formulario
  formAgregarLote.reset();
});


// ===== 9. Datos de ejemplo iniciales =====
// FALTA: Inserta unos datos de ejemplos en el mapa de productos
// "Teclado Mecánico", [10, 5]
// "Ratón Inalámbrico", [20, 15, 5]
// FALTA: actualizar la tabla
