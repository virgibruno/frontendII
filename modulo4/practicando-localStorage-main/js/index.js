/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/


window.addEventListener("load", ()=> {
    const form = document.querySelector("form");
    const divComentarios = document.querySelector(".comentarios");
    const eliminarComentarios = document.querySelector("#eliminar");
    let comentarios = [];

    if (localStorage.getItem("comentarios") != null) {
        comentarios = JSON.parse(localStorage.getItem("comentarios"));
    }
    
    function agregarComentario(comentario) {
        return `<p> ${comentario} </p>`
    }
    
    function renderizarComentarios () {
        if (comentarios.length !=0 ) {
            for (comentario of comentarios) {
                divComentarios.innerHTML += agregarComentario(comentario)
            }
        }
    }

    renderizarComentarios()


    form.addEventListener("submit", (e) => {
        const nvoComentario = document.querySelector("#comentario");
        e.preventDefault();
        if (nvoComentario.value.length != 0) {
            divComentarios.innerHTML = agregarComentario(nvoComentario.value) + divComentarios.innerHTML;

            comentarios.unshift(nvoComentario.value);
            localStorage.setItem("comentarios", JSON.stringify(comentarios));

            form.reset();
        }
    })

    eliminarComentarios.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("comentarios");
        comentarios = [];
        divComentarios.innerHTML = "";
    })
})