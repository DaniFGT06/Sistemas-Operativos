document.addEventListener("DOMContentLoaded", function () {

    const boton = document.getElementById("darkBtn");

    function actualizarTexto() {
        if (document.body.classList.contains("dark-mode")) {
            boton.textContent = "Modo Claro";
        } else {
            boton.textContent = "Modo Oscuro";
        }
    }

    if (localStorage.getItem("modoOscuro") === "activo") {
        document.body.classList.add("dark-mode");
    }

    actualizarTexto();

    boton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("modoOscuro", "activo");
        } else {
            localStorage.setItem("modoOscuro", "inactivo");
        }

        actualizarTexto();
    });


});