const btn = document.getElementById("submit");
const username = document.getElementById("username");
const password = document.getElementById("password");

btn.addEventListener("click", () => {
  let mensajeUsername;
  let mensajePassword;

  if (username.value == "") {
    mensajeUsername = "Ingrese un e-mail";
  } else if (username.value.indexOf("@")==-1) {
    mensajeUsername = "El usuario debe contener @";
  } else {
    mensajeUsername = "";
  }

  if (password.value == "") {
    mensajePassword = "Ingrese una contraseña";
  } else {
    mensajePassword = "";
  }
  
  username.setCustomValidity(mensajeUsername);
  password.setCustomValidity(mensajePassword);
});
