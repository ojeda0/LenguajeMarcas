let jugadores = new Map();

function registrarJugador(mapa, nombre, arrayPuntuaciones) {

    mapa.set(nombre, arrayPuntuaciones);

} 

function darDeBajaJugador(mapa, nombre) {

    mapa.delete(nombre);

}

function anadirPuntuacion(mapa, nombre, puntuacion) {

    if(mapa.has(nombre)) {

        let puntuacionActual = mapa.get(nombre);
        puntuacionActual.push(puntuacion);

    }

}

function obtenerPromedio(arrayPuntuaciones) {

    let suma = 0;

    for(let i=0; i<arrayPuntuaciones.length; i++) {

        suma += arrayPuntuaciones[i];

    }

    return suma / arrayPuntuaciones.length;

}

function mostrarClasificacion(mapa) {

    for (let [nombre, arrayPuntuaciones] of mapa) {

        let mediaJugador = obtenerPromedio(arrayPuntuaciones);

        console.log("Jugador: " + nombre + " | Puntuación Media: " + mediaJugador);

    }

}

module.exports = {

    registrarJugador,
    darDeBajaJugador,
    anadirPuntuacion,
    obtenerPromedio,
    mostrarClasificacion

}

// EJEMPLOS
registrarJugador(jugadores, "Ismael", [5,5,10]);
registrarJugador(jugadores, "Óscar", [8,2,3]);
registrarJugador(jugadores, "Álvaro", [1,1,3]);

console.log("Estado inicial:");
mostrarClasificacion(jugadores);

//añadimos un 3 de puntuacion a alvaro y borramos a oscar
anadirPuntuacion(jugadores, "Álvaro", 3);
darDeBajaJugador(jugadores, "Óscar");

//clasificacion final
mostrarClasificacion(jugadores);
