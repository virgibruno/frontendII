//1- Agregar a la tarjeta, el atributo "class" con el valor "card"

let tarjeta = document.querySelector("#tarjeta");

tarjeta.setAttribute("class", "card");

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"

let imagen = document.querySelector("img");

imagen.setAttribute("src", "https://www.youtube.com/img/desktop/yt_1200.png");

//3- Quitarle al titulo la clase que le está dando un formato feo

let titulo = document.querySelector("h1");

titulo.removeAttribute("class");


//4- Chequear si el link a youtube posee o no el atributo href

let linkYoutube = document.querySelector("#link_youtube");

console.log(linkYoutube.hasAttribute("href"));


//5- Obtener el href del link a wikipedia y mostrarlo por consola

let linkWikipedia = document.getElementById("link_wikipedia");

console.log(linkWikipedia.getAttribute("href"));