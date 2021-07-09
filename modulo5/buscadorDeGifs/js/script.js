window.addEventListener("load", ()=>{
    const formulario = document.querySelector("form");
    const buscador = document.querySelector("#buscador");
    const gifsPopulares = document.querySelector("#populares");
    const resultados = document.querySelector("#resultados")

    const keyGiffy = "XdeChbrRyZ70SXwCGfJgmO2NhHs87Y5v";

    
    gifsPopulares.addEventListener("click", e =>{ 
        e.preventDefault();
        resultados.innerHTML = "";
        fetch(`http:\\api.giphy.com/v1/gifs/trending?api_key=${keyGiffy}&limit=10`)
            .then(response => response.json())
            .then(listadoGifs => {
                for(gif of listadoGifs.data){
                    resultados.innerHTML += `<div><img src="${gif.images.downsized.url} alt="${gif.images.title}"></div>`
                }
            })
    })

    buscador.addEventListener("keypress", e =>{
        if(e.code != "Enter") {
            resultados.innerHTML = "";
            fetch(`http:\\api.giphy.com/v1/gifs/search?api_key=${keyGiffy}&q=${buscador.value + e.key}"&limit=10`)
                .then(response => response.json())
                .then(listadoGifs => {
                    for(gif of listadoGifs.data){
                        resultados.innerHTML += `<div><img src="${gif.images.downsized.url} alt="${gif.images.title}"></div>`
                    }
                })
        }
    })

    formulario.addEventListener("submit", e =>{
        e.preventDefault();
        formulario.reset();  
    })
    
})