// ================= DATOS INICIALES =================
let medicosIniciales = [
    {
        id: 1,
        nombre: "Laura",
        apellido: "Gómez",
        especialidad: "Terapia Neural",
        subespecialidad: "Manejo del dolor",
        foto: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=800",
        frase: "Escuchar al paciente es el primer paso para construir un buen proceso de atención.",
        genero: "femenino"
    },
    {
        id: 2,
        nombre: "Juan",
        apellido: "Pérez",
        especialidad: "Quiropraxia",
        subespecialidad: "Columna y postura",
        foto: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=800",
        frase: "Buscamos recuperar movimiento y confianza para que vuelvas a tus actividades.",
        genero: "masculino"
    },
    {
        id: 3,
        nombre: "María",
        apellido: "Rodríguez",
        especialidad: "Fisioterapia",
        subespecialidad: "Rehabilitación funcional",
        foto: "https://images.pexels.com/photos/5998474/pexels-photo-5998474.jpeg?auto=compress&cs=tinysrgb&w=800",
        frase: "Cada avance cuenta; acompañamos tu recuperación paso a paso.",
        genero: "femenino"
    },
    {
        id: 4,
        nombre: "Carlos",
        apellido: "Martínez",
        especialidad: "Nutrición y Dietética Terapéutica",
        subespecialidad: "Nutrición clínica",
        foto: "https://images.pexels.com/photos/6129452/pexels-photo-6129452.jpeg?auto=compress&cs=tinysrgb&w=800",
        frase: "Una alimentación adecuada puede convertirse en una herramienta para cuidar tu bienestar.",
        genero: "masculino"
    },
    {
        id: 5,
        nombre: "Ana",
        apellido: "López",
        especialidad: "Terapia Neural",
        subespecialidad: "Bienestar integral",
        foto: "https://images.pexels.com/photos/19963126/pexels-photo-19963126.jpeg?auto=compress&cs=tinysrgb&w=800",
        frase: "La atención cercana permite comprender mejor las necesidades de cada persona.",
        genero: "femenino"
    },
    {
        id: 6,
        nombre: "David",
        apellido: "García",
        especialidad: "Quiropraxia",
        subespecialidad: "Movilidad y postura",
        foto: "https://images.pexels.com/photos/6129648/pexels-photo-6129648.jpeg?auto=compress&cs=tinysrgb&w=800",
        frase: "Movimiento, prevención y hábitos saludables hacen parte de nuestro acompañamiento.",
        genero: "masculino"
    },
    {
        id: 7,
        nombre: "Sofía",
        apellido: "Hernández",
        especialidad: "Fisioterapia",
        subespecialidad: "Lesiones deportivas",
        foto: "https://images.pexels.com/photos/37476742/pexels-photo-37476742.jpeg?auto=compress&cs=tinysrgb&w=800",
        frase: "Trabajamos para que recuperes tus capacidades y retomes lo que disfrutas.",
        genero: "femenino"
    },
    {
        id: 8,
        nombre: "Miguel",
        apellido: "Ramírez",
        especialidad: "Nutrición y Dietética Terapéutica",
        subespecialidad: "Hábitos saludables",
        foto: "https://images.pexels.com/photos/32115957/pexels-photo-32115957.jpeg?auto=compress&cs=tinysrgb&w=800",
        frase: "Pequeños cambios sostenidos pueden convertirse en grandes avances para tu salud.",
        genero: "masculino"
    }
];

let medicosCompletos = [...medicosIniciales];
let pacientes = [];
let citas = [];

// ================= DESCRIPCIONES =================
const descripciones = {
    terapia: "<strong>Terapia Neural:</strong> orientación terapéutica enfocada en el sistema nervioso y en la atención de diferentes molestias, siempre de acuerdo con la valoración profesional.",
    quiro: "<strong>Quiropraxia:</strong> disciplina centrada en el sistema musculoesquelético, especialmente en la movilidad y el cuidado de la columna y la postura.",
    fisio: "<strong>Fisioterapia:</strong> acompaña procesos de recuperación del movimiento, fortalecimiento y rehabilitación funcional después de lesiones o limitaciones físicas.",
    nutri: "<strong>Nutrición y Dietética Terapéutica:</strong> utiliza la alimentación y la educación nutricional para apoyar objetivos de salud mediante recomendaciones personalizadas.",
    bienestar: "<strong>Bienestar integral:</strong> promueve hábitos de prevención, movimiento, alimentación y autocuidado como parte de una visión integral de la salud."
};

// ================= MÉDICOS =================
function cargarMedicosTarjetas() {
    const container = document.getElementById("medicos-container");
    if (!container) return;

    let html = "";

    medicosCompletos.forEach(function(medico) {
        const tratamiento = medico.genero === "masculino" ? "Dr." : "Dra.";
        const nombreCompleto = tratamiento + " " + medico.nombre + " " + medico.apellido;

        html += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <article class="doctor-card">
                    <img src="${medico.foto}"
                         class="img-fluid border doctor-image"
                         alt="Fotografía de ${nombreCompleto}">
                    <div class="doctor-info">
                        <h3>${nombreCompleto}</h3>
                        <p class="doctor-specialty">${medico.especialidad}</p>
                        <p><strong>Subespecialidad:</strong> ${medico.subespecialidad}</p>
                        <p class="mb-3">“${medico.frase}”</p>
                        <button type="button" class="btn btn-primary"
                                onclick="prepararCita(${medico.id})">
                            <i class="fa-solid fa-calendar-plus me-2"></i>Agendar cita
                        </button>
                    </div>
                </article>
            </div>
        `;
    });

    container.innerHTML = html;
}

function prepararCita(idMedico) {
    const select = document.getElementById("cita-medico");

    if (select) {
        select.value = String(idMedico);
        document.getElementById("solicitar-cita").scrollIntoView({ behavior: "smooth" });
    }
}

function cargarMedicosSelect() {
    const select = document.getElementById("cita-medico");
    if (!select) return;

    let opciones = '<option value="">Seleccionar médico</option>';

    medicosCompletos.forEach(function(medico) {
        const tratamiento = medico.genero === "masculino" ? "Dr." : "Dra.";
        opciones += `<option value="${medico.id}">${tratamiento} ${medico.nombre} ${medico.apellido} - ${medico.especialidad}</option>`;
    });

    select.innerHTML = opciones;
}

function cargarPacientesSelect() {
    const select = document.getElementById("cita-paciente");
    if (!select) return;

    let opciones = '<option value="">Seleccionar paciente</option>';

    pacientes.forEach(function(paciente) {
        opciones += `<option value="${paciente.id}">${paciente.nombre} ${paciente.apellido}</option>`;
    });

    select.innerHTML = opciones;
}

// ================= ESPECIALIDADES =================
window.mostrarDescripcion = function(especialidad) {
    const descripcion = document.getElementById("especialidad-descripcion");

    if (descripcion && descripciones[especialidad]) {
        descripcion.innerHTML = `<p class="mb-0">${descripciones[especialidad]}</p>`;
    }
};

// ================= VALIDACIONES =================
function obtenerMensaje(input) {
    if (input.validity.valueMissing) {
        return "Este campo es obligatorio.";
    }

    if (input.validity.typeMismatch) {
        return "Ingresa un valor con un formato válido.";
    }

    if (input.validity.patternMismatch) {
        return "El valor no tiene el formato solicitado.";
    }

    if (input.validity.tooShort) {
        return "El valor es demasiado corto.";
    }

    return "";
}

function validarCampo(input) {
    const mensaje = input.parentElement.querySelector(".validation-message");

    if (!mensaje) return input.checkValidity();

    if (input.checkValidity()) {
        mensaje.textContent = "";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        return true;
    }

    mensaje.textContent = obtenerMensaje(input);
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
}

function validarConfirmacionClave() {
    const clave = document.getElementById("paciente-clave");
    const confirmacion = document.getElementById("paciente-confirmacion");
    const mensaje = confirmacion.parentElement.querySelector(".validation-message");

    if (!confirmacion.value) {
        mensaje.textContent = "Debes confirmar la contraseña.";
        confirmacion.classList.add("is-invalid");
        return false;
    }

    if (clave.value !== confirmacion.value) {
        mensaje.textContent = "Las contraseñas no coinciden.";
        confirmacion.classList.add("is-invalid");
        confirmacion.classList.remove("is-valid");
        return false;
    }

    mensaje.textContent = "";
    confirmacion.classList.remove("is-invalid");
    confirmacion.classList.add("is-valid");
    return true;
}

function validarFormularioRegistro() {
    const form = document.getElementById("formRegistro");
    const campos = form.querySelectorAll("input:not([type='checkbox'])");
    let valido = true;

    campos.forEach(function(input) {
        if (!validarCampo(input)) {
            valido = false;
        }
    });

    if (!validarConfirmacionClave()) {
        valido = false;
    }

    const terminos = document.getElementById("aceptaTerminos");
    const mensajeTerminos = terminos.parentElement.parentElement.querySelector(".validation-message");

    if (!terminos.checked) {
        mensajeTerminos.textContent = "Debes confirmar que los datos son correctos.";
        valido = false;
    } else {
        mensajeTerminos.textContent = "";
    }

    return valido;
}

// ================= REGISTRO DE USUARIO =================
function registrarPaciente() {
    const valido = validarFormularioRegistro();

    if (!valido) {
        document.getElementById("mensaje-registro").textContent =
            "Revisa los campos marcados antes de registrar el usuario.";
        return;
    }

    const documento = document.getElementById("paciente-documento").value.trim();

    const existe = pacientes.some(function(paciente) {
        return paciente.documento === documento;
    });

    if (existe) {
        document.getElementById("mensaje-registro").textContent =
            "Ya existe un paciente registrado con ese documento.";
        return;
    }

    const nuevoPaciente = {
        id: pacientes.length + 1,
        nombre: document.getElementById("paciente-nombres").value.trim(),
        apellido: document.getElementById("paciente-apellidos").value.trim(),
        documento: documento,
        telefono: document.getElementById("paciente-telefono").value.trim(),
        correo: document.getElementById("paciente-correo").value.trim()
    };

    pacientes.push(nuevoPaciente);
    cargarPacientesSelect();

    document.getElementById("mensaje-registro").textContent =
        "Registro realizado correctamente. Ya puedes seleccionar el paciente para solicitar una cita.";

    document.getElementById("formRegistro").reset();

    document.querySelectorAll("#formRegistro .is-valid").forEach(function(input) {
        input.classList.remove("is-valid");
    });
}

// ================= CITAS =================
function validarRangoHoras() {
    const inputInicio = document.getElementById("cita-hora-inicio");
    const inputFin = document.getElementById("cita-hora-fin");

    if (!inputInicio || !inputFin) return true;

    const inicio = inputInicio.value;
    const fin = inputFin.value;
    const mensaje = inputFin.parentElement.querySelector(".validation-message");

    // La hora de finalización debe ser estrictamente posterior a la de inicio.
    if (inicio && fin && fin <= inicio) {
        mensaje.textContent = "La hora de finalización debe ser posterior a la hora de inicio.";
        inputFin.classList.add("is-invalid");
        inputFin.classList.remove("is-valid");
        return false;
    }

    mensaje.textContent = "";
    if (fin) {
        inputFin.classList.remove("is-invalid");
        inputFin.classList.add("is-valid");
    }
    return true;
}

function validarCita() {
    const form = document.getElementById("formCita");
    let valido = true;

    form.querySelectorAll("input, select").forEach(function(input) {
        if (!validarCampo(input)) {
            valido = false;
        }
    });

    if (!validarRangoHoras()) {
        valido = false;
    }

    return valido;
}

function agendarCita() {
    if (!validarCita()) {
        return;
    }

    const medicoId = parseInt(document.getElementById("cita-medico").value);
    const pacienteId = parseInt(document.getElementById("cita-paciente").value);

    const medico = medicosCompletos.find(function(item) {
        return item.id === medicoId;
    });

    const paciente = pacientes.find(function(item) {
        return item.id === pacienteId;
    });

    if (!medico || !paciente) {
        alert("No fue posible encontrar el médico o paciente seleccionado.");
        return;
    }

    const nuevaCita = {
        id: citas.length + 1,
        fecha: document.getElementById("cita-fecha").value,
        horaInicio: document.getElementById("cita-hora-inicio").value,
        horaFin: document.getElementById("cita-hora-fin").value,
        medicoNombre: (medico.genero === "masculino" ? "Dr. " : "Dra. ") + medico.nombre + " " + medico.apellido,
        pacienteNombre: paciente.nombre + " " + paciente.apellido
    };

    citas.push(nuevaCita);
    actualizarTablaCitas();

    document.getElementById("formCita").reset();
    document.querySelectorAll("#formCita .is-valid").forEach(function(input) {
        input.classList.remove("is-valid");
    });

    alert("Cita agendada correctamente.");
}

function actualizarTablaCitas() {
    const tbody = document.getElementById("tabla-citas-body");

    if (!tbody) return;

    if (citas.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center py-4">No hay citas programadas todavía.</td>
            </tr>
        `;
        return;
    }

    let filas = "";

    citas.forEach(function(cita) {
        filas += `
            <tr>
                <td>${cita.fecha}</td>
                <td>${cita.horaInicio}</td>
                <td>${cita.horaFin}</td>
                <td>${cita.medicoNombre}</td>
                <td>${cita.pacienteNombre}</td>
            </tr>
        `;
    });

    tbody.innerHTML = filas;
}

// ================= EVENTOS =================
document.addEventListener("DOMContentLoaded", function() {
    cargarMedicosTarjetas();
    cargarMedicosSelect();
    cargarPacientesSelect();
    actualizarTablaCitas();

    // Validación al cambiar el foco entre campos.
    document.querySelectorAll("#formRegistro input, #formCita input, #formCita select").forEach(function(input) {
        input.addEventListener("blur", function() {
            validarCampo(input);

            if (input.id === "paciente-clave" || input.id === "paciente-confirmacion") {
                validarConfirmacionClave();
            }
        });
    });

    const horaInicio = document.getElementById("cita-hora-inicio");
    const horaFin = document.getElementById("cita-hora-fin");

    // La hora mínima de finalización se actualiza automáticamente según la hora de inicio.
    horaInicio.addEventListener("change", function() {
        horaFin.min = horaInicio.value || "";
        validarRangoHoras();
    });

    horaFin.addEventListener("input", validarRangoHoras);
    horaFin.addEventListener("change", validarRangoHoras);

    document.getElementById("formRegistro").addEventListener("submit", function(event) {
        event.preventDefault();
        registrarPaciente();
    });

    document.getElementById("formCita").addEventListener("submit", function(event) {
        event.preventDefault();
        agendarCita();
    });

    document.getElementById("btnLimpiarRegistro").addEventListener("click", function() {
        setTimeout(function() {
            document.querySelectorAll("#formRegistro .is-valid, #formRegistro .is-invalid").forEach(function(input) {
                input.classList.remove("is-valid", "is-invalid");
            });
            document.querySelectorAll("#formRegistro .validation-message").forEach(function(mensaje) {
                mensaje.textContent = "";
            });
            document.getElementById("mensaje-registro").textContent = "";
        }, 0);
    });
});
