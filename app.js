// INICIALIZAR EMAILJS
emailjs.init("TU_PUBLIC_KEY");

// FORMULARIO
const form = document.getElementById("contacto-form");

// EVENTO SUBMIT
form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "TU_SERVICE_ID",
        "TU_TEMPLATE_ID",
        this
    )

    .then(() => {

        alert("Reporte enviado correctamente.");

        form.reset();

    })

    .catch((error) => {

        alert("Ocurrió un error al enviar el reporte.");

        console.log(error);

    });

});