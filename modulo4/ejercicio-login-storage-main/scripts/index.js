// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

window.addEventListener("load", () => {
  
  const formulario = document.querySelector("form")
  const loader = document.querySelector("#loader");
  const error = document.querySelector("#error-container");
  const titulo = document.querySelector("h1");
  const main = document.querySelector("main");
  
  function comprobarUsuario (mail, contra) {
    
    for (usuario of baseDeDatos.usuarios) {
      if (usuario.email == mail && usuario.password == contra) {
        return usuario
      }
    }
    return false
    
  }
  
  function validarEmail (mail) {
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return er.test(mail);

  }

  function pagBienvenidx (usuario) {
    formulario.classList.add("hidden");
    titulo.innerHTML = `Bienvenidx al sitio, ${usuario} 😀`
    main.innerHTML += `<button class="login-btn" id="cerrar-sesion">Cerrar sesión</button>`
    let btnCerrarSesion = document.querySelector("#cerrar-sesion")
    btnCerrarSesion.addEventListener("click", ()=>{
      sessionStorage.clear()
      location.reload()
    })
  }

  if (sessionStorage.getItem("usuario") != null) {
    pagBienvenidx(sessionStorage.getItem("usuario"))
  }
  
  formulario.addEventListener("submit", e => {
    e.preventDefault();

    loader.classList.remove("hidden");
    error.classList.add("hidden");

    let email = document.querySelector("#email-input");
    let password = document.querySelector("#password-input");
    let usuario = comprobarUsuario(email.value, password.value);

    
    setTimeout(()=>{
      
      if ( validarEmail(email.value) && password.value.length >= 5 && usuario != false) {
        sessionStorage.clear()
        sessionStorage.setItem('usuario', usuario.name)
        sessionStorage.setItem('mail', usuario.email)
        pagBienvenidx(usuario.name)     
      } else {
        loader.classList.add("hidden");
        error.classList.remove("hidden");
        error.innerHTML = "<small>Alguno de los datos ingresados son incorrectos</small>"
      }

    }, 
    3000)

  })


})


// ACTIVIDAD

// Paso a paso:

// 1) Al momento de que la persona inicia sesión, si las validaciones que ya tenemos implementadas
// han sido exitosas, deberemos almacenar la información del usuario en el LocalStorage.

// 2) Al mensaje de bienvenida que ya teníamos implementado, deberemos agregarle el nombre de la
// persona y un botón de "Cerrar Sesión".

// 3) Una vez iniciada la sesión, la misma se deberá mantener en ese estado para el caso de que la persona
// recargue la página. Para ello, deberás validar si existe información del usuario al momento en
// que se produce la carga de la página, y en base a dicha condción decidir que elementos mostrar.

// 3) Para el caso de que la persona haga click en el botón "Cerrar Sesión", se deberá eliminar
// la información del usuario, mostrar un mensaje indicando que se ha cerrado la sesión, y recargar
// la página para mostrar nuevamente el formulario de login.

/* 
TIPS:
  - Para lograr los objetivos de este ejercicio, deberás valerte de algunos eventos y métodos que vimos en
    las clases anteriores. Te invitamos a que revises los recursos en caso de que tengas dudas, ya que allí
    encontrarás todas las respuestas que necesitas para completar la actividad.

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - Al momento de guardar información del usuario en el navegador, recuerda que debemos almacenar solo la 
    información necesaria, y EN NINGUN CASO DEBEMOS GUARDAR LA CONTRASEÑA. Por ello, deberás seleccionar y
    separar la información que tienes que almacenar, a partir del objeto que contiene la información del 
    usuario.

   ¡Manos a la obra!
 */
