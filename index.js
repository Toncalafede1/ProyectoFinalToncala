function validarNombre(nombre) {
    return !(/[^\sa-zA-Z]/.test(nombre));
}

function saludar(nombre) {
    console.log("Bienvenidos a Tvomcala, el restaurante de tus sueños. Te deseamos una gran experiencia" + " " + nombre);
}

let nombre = prompt("Ingrese su nombre");

while (!validarNombre(nombre)) {
    nombre = prompt("Por favor, ingrese un nombre válido (solo letras y espacios):");
}
saludar(nombre);

let reserva = {
    nombre: nombre,
    integrantes: [],
    obtenerCantidadIntegrantes: function () {
        return this.integrantes.length;
    },
    imprimirNombresIntegrantes: function () {
        if (this.integrantes.length === 0) {
            console.log("No hay nombres de integrantes.");
        } else {
            console.log("Nombres de integrantes:");
            this.integrantes.forEach(integrante => {
                console.log(integrante.nombre);
            });
        }
    }
};

let fechaReserva;
let dia, mes, anio;

while (true) {
    fechaReserva = prompt("Por favor, introduce la fecha de reserva (DD-MM-YYYY):");
    let fecha = fechaReserva.split('-');
    dia = parseInt(fecha[0], 10);
    mes = parseInt(fecha[1], 10);
    anio = parseInt(fecha[2], 10);

    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();

    if (
        mes >= 1 && mes <= 12 &&
        dia >= 11 && dia <= 30 &&
        anio >= anioActual && anio <= anioActual + 1
    ) {
        console.log("Tu fecha de reserva es: " + fechaReserva);
        console.log("Gracias!");

        reserva.fecha = fechaReserva;

        break;
    } else {
        console.log("Por favor, introduce una fecha válida (días 11 al 30, meses 1 al 12, año actual o próximo).");
    }
}

let cantidadIntegrantes;
while (true) {
    let input = prompt("¿Cuántos integrantes serán en la reserva?");
    if (!isNaN(input)) {
        cantidadIntegrantes = parseInt(input);
        break;
    } else {
        console.log("Por favor, ingrese un número válido.");
    }
}

if (cantidadIntegrantes === 0) {
    console.log("No se pueden hacer reservas sin integrantes. Cancelando la reserva.");
} else {
    for (let i = 0; i < cantidadIntegrantes; i++) {
        let nombreIntegrante;
        do {
            nombreIntegrante = prompt("Ingrese el nombre del integrante " + (i + 1) + ":");
        } while (!validarNombre(nombreIntegrante));

        reserva.integrantes.push({ nombre: nombreIntegrante });
    }
    
    console.log("Cantidad de integrantes:", reserva.obtenerCantidadIntegrantes());
    reserva.imprimirNombresIntegrantes();
    
    console.log("Información de la reserva:");
    console.log(reserva);
}
