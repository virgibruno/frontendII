let confirmaCambios = confirm('Querés cambiar el estilo del quinto artículo?')
let titulo = document.querySelector("h1")

titulo.innerHTML += "<br> Soy contenido nuevo de JS!!"

let quintoArticulo = document.querySelector("article:nth-child(5)")

if (confirmaCambios) {
    quintoArticulo.classList.add("animado")
    titulo.style.fontSize = "40px"
}
