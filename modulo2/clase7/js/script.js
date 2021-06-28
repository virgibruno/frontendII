
let listaDeImagenes = document.querySelectorAll("img");
let listaVinculos = document.querySelectorAll("a");

/*
for (i=1; i<=listaVinculos.length; i++) {
    let url = prompt("Escribi el url");
    let img = document.querySelector(`.contenedor .tarjeta:nth-of-type(${i}) img`);
    let link = document.querySelector(`.contenedor .tarjeta:nth-of-type(${i}) a`);
    img.setAttribute("src", url)
    link.setAttribute("href", url)
    link.setAttribute("target", "_blank")
}
*/

let url = prompt("Escribi el url")
let contenedor = document.querySelector(".contenedor")

while (url != null) {
    contenedor.innerHTML += `
        <div class="tarjeta">
            <a class="rutas-img" href="${url}" target="_blank">
                <img src="${url}">
            </a>
        </div>
    `
    url = prompt("Escribi la url")
}