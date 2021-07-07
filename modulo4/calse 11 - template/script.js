const numeros = "0123456789"
const letras = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ"

function tieneNumeros (string) {
    for (i=0; i<string.length; i++) {
        if (numeros.includes(string.charAt(i),0)){
            return true
        }
    }
    return false
}

function tieneLetras (string) {
    for (i=0; i<string.length; i++) {
        if (letras.includes(string.charAt(i),0)){
            return true
        }
    }
    return false
}

window.addEventListener("load", () => {
    
    const formulario = document.querySelector("form")

    formulario.addEventListener("submit" , e => {

        e.preventDefault()

        // Seleccionando inputs
        const campoNombre = document.querySelector("#nombre");
        const nombreValue = document.querySelector("#nombre").value.trim()
        const nombrePorPartes = nombreValue.split(" ");
        const campoPass = document.querySelector("#pass");
        const campoPassRep = document.querySelector("#pass-rep");
        
        // Seleccionando cassillas de error
        const errorNombre = document.querySelector("#error-nombre");
        const errorPass = document.querySelector("#error-pass");
        const errorPassRep = document.querySelector("#error-pass-rep");
        
        // Formateando errores
        let errores = {}
        errorNombre.innerHTML = "";
        errorPass.innerHTML = "";
        errorPassRep.innerHTML = "";
        campoNombre.classList.remove("error");
        campoPass.classList.remove("error");
        campoPassRep.classList.remove("error");

        // Validando nombre
        // Que tenga nombre y apellido, largo menor a 150, cada parte por lo menos 2 caracteres y sin números. Es campo obligatorio (si no está completado, solo aparece este error)        
        if (!nombreValue.includes(" ")){
            errores.nombreValue = "Escribir nombre y apellido"
            errorNombre.innerHTML +=`<p> ${errores.nombreValue} </p>`
            campoNombre.classList.add("error")
        }
        
        if (nombreValue.length > 150) {
            errores.nombreLargo = "Fua, tu nombre es más largo que el de Dumbledore"
            errorNombre.innerHTML +=`<p> ${errores.nombreLargo} </p>`
            campoNombre.classList.add("error")
        }
        
        for (nombre of nombrePorPartes) {
            if (nombre.length < 2) {
                errores.nombreCorto ="Alguno de tus nombres es muy corto..."
                campoNombre.classList.add("error")
            }
        }

        if (Object.keys(errores).includes("nombreCorto")) {
            errorNombre.innerHTML +=`<p> ${errores.nombreCorto} </p>`
        }

        if (tieneNumeros(nombreValue)) {
            errores.nombreConNumeros = "¿Tu nombre tiene números?"
            errorNombre.innerHTML +=`<p> ${errores.nombreConNumeros} </p>`
            campoNombre.classList.add("error")
        }

        if (nombreValue == "") {
            errores.nombreObligatorio = "Campo obligatorio"
            errorNombre.innerHTML =`<p> ${errores.nombreObligatorio} </p>`
            campoNombre.classList.add("error")
        }
        
        // Validando contraseña
        // Entre 6 y 15 números alfanuméricos, al menos 1 número y al menos 1 letra. Contraseñas iguales.
        if (campoPass.value.length < 6 || campoPass.value.length > 15) {
            errores.passLargo = "La contraseña debe tener entre 6 y 15 caracteres";
            campoPass.classList.add("error");
            errorPass.innerHTML += `<p> ${errores.passLargo} </p>`            
        }

        if ( !tieneNumeros(campoPass.value)){
            errores.passNum = "La contraseña debe tener al menos un número";
            campoPass.classList.add("error");
            errorPass.innerHTML += `<p> ${errores.passNum} </p>`            
        }

        if ( !tieneLetras(campoPass.value)){
            errores.passLetra = "La contraseña debe tener al menos una letra";
            campoPass.classList.add("error");
            errorPass.innerHTML += `<p> ${errores.passLetra} </p>`            
        }


        if (campoPass.value.length == 0) {
            errores.passObligatoria = "La contraseña es obligatoria!";
            campoPass.classList.add("error");
            errorPass.innerHTML = `<p> ${errores.passObligatoria} </p>` 
        } else if (campoPass.value != campoPassRep.value) {
            errores.passDistintas = "Las contraseñas no coinciden";
            campoPassRep.classList.add("error");
            errorPassRep.innerHTML = `<p> ${errores.passDistintas} </p>`
        }
        


        // Validando hobbies
        // Se deben seleccionar como máximo 4 hobbies, no se puede combinar videojuegos con cocina, guitarra con lectura ni netflix con tejer
        

        // Validando paises
        // El campo es obligatorio. Aún no se están reclutando magos en argentina



        // Enviar formulario (si no hay errores!)

        if (Object.keys(errores).length == 0) {
            formulario.submit()
        }



    })
    
})