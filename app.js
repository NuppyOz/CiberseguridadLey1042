// ESPERAR A QUE CARGUE EL HTML
document.addEventListener("DOMContentLoaded", () => {

    // INICIALIZAR EMAILJS
    emailjs.init("i4Z0FjQN1VBXf3Ouc");

    // OBTENER FORMULARIO
    const form = document.getElementById("contact-form");

    // VALIDAR SI EXISTE
    if (!form) {
        console.error("No se encontró el formulario");
        return;
    }

    // EVENTO SUBMIT
    form.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.send("service_plg9cje", "template_scjygoy", {

            nombre: document.getElementById("nombre").value,

            correo: document.getElementById("correo").value,

            tipo: document.getElementById("tipo").value,

            mensaje: document.getElementById("mensaje").value,

        })

        .then(() => {

            Swal.fire({
                title: "Reporte enviado",
                text: "Gracias por compartir tu caso.",
                icon: "success",
                confirmButtonText: "Aceptar"
            });

            form.reset();

        })

        .catch((error) => {

            console.error(error);

            Swal.fire({
                title: "Error",
                text: "No se pudo enviar el reporte.",
                icon: "error",
                confirmButtonText: "Cerrar"
            });

        });

    });

});