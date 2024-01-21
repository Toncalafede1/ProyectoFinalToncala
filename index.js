document.getElementById("reservaForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById("nombre").value.trim();
    const fecha = document.getElementById("fecha").value;
    const numIntegrantes = document.getElementById("integrantes").value;

    if (!nombre || !fecha || !numIntegrantes) {
        mostrarMensajeError("Por favor, complete todos los campos requeridos: Nombre, Fecha y Número de Integrantes.");
        return;
    }

    
    if (!validarNombre(nombre)) {
        mostrarMensajeError("El campo 'Nombre' solo debe contener letras.");
        return;
    }

    
    if (!validarFecha(fecha)) {
        mostrarMensajeError("Las fechas disponibles son los días del 11 al 30.");
        return;
    }

    
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("fecha", fecha);
    localStorage.setItem("numIntegrantes", numIntegrantes);

    
    const nombresIntegrantes = [];
    for (let i = 1; i <= numIntegrantes; i++) {
        const integranteNombre = document.getElementsByName("integrante" + i)[0].value;

        
        if (!validarNombre(integranteNombre)) {
            mostrarMensajeError("El nombre del integrante " + i + " solo debe contener letras.");
            return;
        }

        nombresIntegrantes.push(integranteNombre);
    }
    localStorage.setItem("nombresIntegrantes", JSON.stringify(nombresIntegrantes));

    
    mostrarMensajeExito("Se ha registrado su reserva.");
});

function validarNombre(nombre) {
    
    return /^[a-zA-Z]+$/.test(nombre);
}

function validarFecha(fecha) {
    const fechaSeleccionada = new Date(fecha);
    const dia = fechaSeleccionada.getDate();
    
    
    return dia >= 11 && dia <= 30;
}

function agregarNombres() {
    const numIntegrantes = document.getElementById("integrantes").value;

    
    if (isNaN(numIntegrantes) || numIntegrantes <= 0) {
        mostrarMensajeError("El número de integrantes debe ser un valor numérico mayor que cero.");
        return;
    }

    const nombresDiv = document.getElementById("nombresIntegrantes");
    nombresDiv.innerHTML = ""; 

    for (let i = 1; i <= numIntegrantes; i++) {
        const label = document.createElement("label");
        label.innerHTML = "Nombre del Integrante " + i + ": ";
        nombresDiv.appendChild(label);

        const input = document.createElement("input");
        input.type = "text";
        input.name = "integrante" + i;
        nombresDiv.appendChild(input);

        nombresDiv.appendChild(document.createElement("br"));
    }
}

function mostrarMensajeError(mensaje) {
    const outputMessages = document.getElementById("outputMessages");
    outputMessages.innerHTML = "<p style='color: white;'>" + mensaje + "</p>";
}

function mostrarMensajeExito(mensaje) {
    const outputMessages = document.getElementById("outputMessages");
    outputMessages.innerHTML = "<p style='color: white;'>" + mensaje + "</p>";
}
