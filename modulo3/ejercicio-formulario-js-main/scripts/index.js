const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {
  
  
  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email
  let emailValue = document.querySelector("#email-input").value;
  
  // 2. Obtenemos los datos ingresados en el input de password
  let password = document.querySelector("#password-input").value;
  
  // 3. Obtenemos el valor del input radio
  let mayorEdad = document.getElementsByName("legalAge");
  
  // 4. Obtenemos el valor del input checkbox
  let condiciones = document.querySelector("#tyc-input").checked;
  
  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  if (!mayorEdad[0].checked) {
    alert ("Debes ser mayor de edad para registrarte en el sitio")
  }

  // 6 Vaidamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  else if(!condiciones) {
    alert("Debes aceptar los TyCs para registrarte en el sitio")
  }
  
  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario. 
  else {
    let persona = {
      email: emailValue,
      password: password,
      LegalAge: mayorEdad[0].checked,
      tycAccepted: condiciones,
    }
    console.log(persona)
  }
  
});
