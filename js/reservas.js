document.addEventListener("DOMContentLoaded", function () {
    mostrarReservas();
});

function mostrarReservas() {
    const listaDeReservas = document.getElementById("listaDeReservas");
    const nombre = localStorage.getItem("nombre");
    const fecha = localStorage.getItem("fecha");
    const nombresIntegrantes = JSON.parse(localStorage.getItem("nombresIntegrantes"));

    if (nombre && fecha && nombresIntegrantes && nombresIntegrantes.length > 0) {
        
        const infoReserva = document.createElement("p");
        infoReserva.textContent = `Nombre: ${nombre}, Fecha: ${fecha}`;
        listaDeReservas.appendChild(infoReserva);

        
        const listaIntegrantes = document.createElement("ul");
        nombresIntegrantes.forEach((integrante, index) => {
            const elementoIntegrante = document.createElement("li");
            elementoIntegrante.textContent = `Integrante ${index + 1}: ${integrante}`;
            listaIntegrantes.appendChild(elementoIntegrante);
        });
        listaDeReservas.appendChild(listaIntegrantes);
    } else {
        listaDeReservas.textContent = "No hay reservas disponibles.";
    }
}

function borrarReservas() {
    localStorage.removeItem("nombre");
    localStorage.removeItem("fecha");
    localStorage.removeItem("numIntegrantes");
    localStorage.removeItem("nombresIntegrantes");
    mostrarReservas();
}