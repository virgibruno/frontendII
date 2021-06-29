
let listadoTodos = [
    {
        description: "Mi hermosa tarea 1",
        createdAt: "19/04/20",
        pendiente: true,
    },
    {
        description: "Mi hermosa tarea 2",
        createdAt: "19/04/20",
        pendiente: false,
    },
    {
        description: "Mi hermosa tarea 3",
        createdAt: "19/04/20",
        pendiente: true,
    },
    {
        description: "Mi hermosa tarea 4",
        createdAt: "19/04/20",
        pendiente: true,
    },
    {
        description: "Mi hermosa tarea 5",
        createdAt: "19/04/20",
        pendiente: false,
    },
];

let nuevaTarea = (tarea) => {
    return `
    <li class="tarea">
        <div class="not-done"></div>
        <div class="descripcion">
            <p class="nombre">${tarea.description}</p>
            <p class="timestamp">Creada: ${tarea.createdAt}</p>
        </div>
    </li> 
    `
}

window.addEventListener("load", ()=>{
    const tareasPendientes = document.querySelector(".tareas-pendientes");
    const tareasTerminadas = document.querySelector(".tareas-terminadas");
    const enviarNvaTarea = document.querySelector("form.nueva-tarea")
    
    renderizarTodos()


    function renderizarTodos() {
        tareasPendientes.innerHTML = "";
        tareasTerminadas.innerHTML = "";

        for (tarea of listadoTodos) {
            if (tarea.pendiente) {
                tareasPendientes.innerHTML += nuevaTarea(tarea)
            } else {
                tareasTerminadas.innerHTML += nuevaTarea(tarea)
            }
        }

        /* -------------------------------------------
            Marcar tarea como finalizada
        ------------------------------------------- */
        const btnsMarcarFin = document.querySelectorAll(".not-done")
        
        for (btn of btnsMarcarFin) {
            btn.addEventListener("click", e => {
                let tareaParaMarcar = e.srcElement.nextElementSibling
                console.log(tareaParaMarcar.innerHTML)
                for (tarea of listadoTodos) {
                    if (tarea.description == tareaParaMarcar){

                    }
                }
            })
        }

    }
    


    /* -------------------------------------------
        Crear nueva tarea  
    ------------------------------------------- */

    function fechaDeHoy() {
        let today = new Date();
        const dateOptions = {
            day: "numeric",
            month: "numeric",
            year: "2-digit"
        }
        return today.toLocaleDateString("es-AR", dateOptions)
    }

    enviarNvaTarea.addEventListener("submit", (e) => {
        e.preventDefault();
        let NvaTareaText = document.querySelector("#textNuevaTarea").value;
        if (NvaTareaText !="") {
            let NvaTarea = {
                description: NvaTareaText,
                createdAt: fechaDeHoy(),
                pendiente: true,
            }
            listadoTodos.unshift(NvaTarea);
            renderizarTodos();
            enviarNvaTarea.reset()
        };
    })

})