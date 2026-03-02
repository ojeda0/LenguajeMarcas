//creamos el mapa alumnos
let alumnos = new Map();

//funcion para agregar alumno y recibe parametros de nombre del mapa, nombre alumno y el array de notas
function agregarAlumno(mapa, nombre, arrayNotas) {

    mapa.set(nombre, arrayNotas);
    
}

//funcion de eliminar alumno y recibe parametros de nombre del mapa y nombre del alumno
function eliminarAlumno(mapa, nombre) {

    mapa.delete(nombre);

}

//funcion de agregar notas, recibe parametros del nombre del mapa, alumno y nueva nota
function agregarNota(mapa, nombre, nuevaNota) {

    if (mapa.has(nombre)) {
        let notasActuales = mapa.get(nombre);
        notasActuales.push(nuevaNota);
    }

}

//funcion de media, recibe el array de notas
function calcularMedia(arrayNotas) {

    let suma = 0;

    for (let i = 0; i < arrayNotas.length; i++) {
        suma = suma + arrayNotas[i];
    }

    return suma / arrayNotas.length;

}

//funcion de imprimir para ver los alumnos
function imprimir(mapa) {

    for (let [nombre, notas] of mapa) {

        let mediaAlumno = calcularMedia(notas);

        console.log("Alumno: " + nombre + " | Media: " + mediaAlumno);

    }

}

//ultimo añadido dicho por Jesús
module.exports = {

    agregarAlumno,
    eliminarAlumno,
    agregarNota,
    calcularMedia,
    imprimir

};


//PRUEBAS

// Añadimos datos
agregarAlumno(alumnos, "Ana", [7, 8, 6]);
agregarAlumno(alumnos, "Luis", [4, 5, 5]);
agregarAlumno(alumnos, "Marta", [9, 8, 10]);


console.log("Estado inicial:");
imprimir(alumnos);


// Modificamos datos
console.log("\nAñadimos un 9 a Luis y eliminamos a Ana...");
agregarNota(alumnos, "Luis", 9);
eliminarAlumno(alumnos, "Ana");


// Mostramos el resultado final
console.log("\nEstado final:");
imprimir(alumnos);