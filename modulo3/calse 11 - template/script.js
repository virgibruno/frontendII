window.addEventListener("load", () => {
    datosUsuario = {
        nombre:"",
        telefono:"",
        contrasenia:"",
        hobbies: [],
        nacionalidad:"",
    }

    

    const campoNombre = document.querySelector("#nombre");
    const campoContrasenia = document.querySelector("#pass");
    const campoTelefono = document.querySelector("#tel");
    const campoHobbies = document.getElementsByName("hobbies");
    const campoPais = document.getElementsByName("nacionalidad");

    campoNombre.addEventListener("blur", ()=> {             
        datosUsuario.nombre =campoNombre.value.toUpperCase().trim().replaceAll(" ","")
        habilitarBtnEnviar();
        if (datosUsuario.nombre != "") {
            campoNombre.classList.remove("error");
        } else {
            campoNombre.classList.add("error");
        }
    })

    campoContrasenia.addEventListener("blur", ()=> {             
        datosUsuario.contrasenia =campoContrasenia.value
        habilitarBtnEnviar();
        if (datosUsuario.contrasenia != "") {
            campoContrasenia.classList.remove("error");
        } else {
            campoContrasenia.classList.add("error");
        }
    })

    campoTelefono.addEventListener("blur", ()=> {             
        datosUsuario.telefono =campoTelefono.value.trim()
        habilitarBtnEnviar();
        if (datosUsuario.telefono != "") {
            campoTelefono.classList.remove("error");
        } else {
            campoTelefono.classList.add("error");
        }
    })

    
    for (hobbie of campoHobbies) {
        hobbie.addEventListener("click", ()=>{
            let contador = 0;
            datosUsuario.hobbies = [];
            for (hob of campoHobbies) {
                if(hob.checked) {
                    contador++
                    datosUsuario.hobbies.push(hob.value) 
                }
            }
            if (contador > 4) {
                alert("Seleccionar máximo 4 hobbies!")
            }
        })
    }
    
    for (pais of campoPais) {
        pais.addEventListener("click", ()=> {
            for (ps of campoPais) {
                if (ps.checked) {
                    datosUsuario.nacionalidad = ps.value
                }
            }
            habilitarBtnEnviar()
        })
    }
    
    function habilitarBtnEnviar () {
        console.log(datosUsuario)
        if (datosUsuario.nombre!="" && datosUsuario.telefono!="" && datosUsuario.contrasenia !="" && datosUsuario.nacionalidad !=""){
        let btnEnviar = document.querySelector("button")
        btnEnviar.removeAttribute("disabled")
        }
    }



})