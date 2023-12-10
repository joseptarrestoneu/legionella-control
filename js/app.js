window.addEventListener("load", () => {

    // Captura de pantalles del main
    let entryWindow = document.querySelector(".entry-window")
    let config = document.querySelector(".config-app")
    let units = document.querySelector(".list-units")
    let elements = document.querySelector(".list-elements")

    // Crear pantalles dinàmicament
    // 1) Pantalla de Llista d'Elements:
    let listElements = ``
    
    // 2) Pantalla de Llista d'Unitats:
    let listUnits =


    // Activar i desactivar pantalles
    addEventListener("click", (event) => {
        if (event.target.classList.contains("entry")) {
            entryWindow.classList.remove("disable")
            config.classList.add("disable")
            units.classList.add("disable")
            elements.classList.add("disable")
        }
        if (event.target.classList.contains("config")) {
            entryWindow.classList.add("disable")
            config.classList.remove("disable")
            units.classList.add("disable")
            elements.classList.add("disable")
        }
        if (event.target.classList.contains("units")) {
            entryWindow.classList.add("disable")
            config.classList.add("disable")
            units.classList.remove("disable")
            elements.classList.add("disable")
        }
        if (event.target.classList.contains("list")) {
            entryWindow.classList.add("disable")
            config.classList.add("disable")
            units.classList.add("disable")
            elements.classList.remove("disable")
        }
    })

    

})