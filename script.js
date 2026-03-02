document.addEventListener("DOMContentLoaded", function () {

    const boton = document.getElementById("darkBtn");

    function actualizarTexto() {
        if (document.body.classList.contains("dark")) {
            boton.textContent = "Modo Claro";
        } else {
            boton.textContent = "Modo Oscuro";
        }
    }

    if (localStorage.getItem("modoOscuro") === "activo") {
        document.body.classList.add("dark");
    }

    actualizarTexto();

    boton.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("modoOscuro", "activo");
        } else {
            localStorage.setItem("modoOscuro", "inactivo");
        }

        actualizarTexto();
    });
    
});

const input = document.getElementById("inputCmd");
const output = document.getElementById("output");

if(input){
    input.addEventListener("keypress", function(e){

        if(e.key === "Enter"){

            const cmd = input.value.toLowerCase();
            let respuesta = "";

            if(cmd === "help"){
                respuesta = "Comandos: systeminfo, tasklist, ipconfig";
            }
            else if(cmd === "systeminfo"){
                respuesta = "Muestra información del sistema operativo.";
            }
            else if(cmd === "tasklist"){
                respuesta = "Lista los procesos en ejecución.";
            }
            else if(cmd === "ipconfig"){
                respuesta = "Muestra la configuración de red.";
            }
            else{
                respuesta = "Comando no reconocido.";
            }

            output.innerHTML += `<p>> ${cmd}</p><p>${respuesta}</p>`;
            input.value = "";
        }
    });
}