        // Boton cambio de tema
        const botonTema = document.getElementById("cambiar-tema");
    
        // Función para cambiar el tema
        function cambiarTema() {
            const body = document.body;
    
            // temas Light/dark
            if (body.classList.contains("tema-oscuro")) {
                body.classList.remove("tema-oscuro");
                body.classList.add("tema-claro");
                botonTema.innerHTML = '<i class="fas fa-sun"></i>'; // Light
            } else {
                body.classList.remove("tema-claro");
                body.classList.add("tema-oscuro");
                botonTema.innerHTML = '<i class="fas fa-moon"></i>'; // Dark
            }
        }
    
        // Boton toggle
        botonTema.addEventListener("click", cambiarTema);
