const firebaseConfig = {
    apiKey: "AIzaSyBQ4Ggv-xegIMdgv18ajfezdj0ZXKXcQbk",
    authDomain: "register-7e8dc.firebaseapp.com",
    projectId: "register-7e8dc",
    storageBucket: "register-7e8dc.appspot.com",
    messagingSenderId: "1038711927042",
    appId: "1:1038711927042:web:338496a99188beb1d2d21b",
    measurementId: "G-H3LVCXLV9M"
  };

  // Initialize Firebases
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

document.getElementById("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  let email = document.getElementById("email");
  let emailError = document.getElementById("emailError");
  let emailPattern =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  validationEmail(email, emailError, emailPattern);

  let password = document.getElementById("password");
  let passwordError = document.getElementById("passwordError");
  let passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

  validationPassword(password, passwordError, passwordPattern);

  //Si todos los campos son válidos enviar formulario
  if (
    !emailError.textContent &&
    !passwordError.textContent 
  ) {
    await addUserToDatabase( email, password);
  }
});

function validationEmail(email, emailError, emailPattern) {
  if (!emailPattern.test(email.value)) {
    emailError.textContent = "Por favor, introducí un email válido";
    emailError.classList.add("error-message");
  } else {
    emailError.textContent = "";
    emailError.classList.remove("error-message");
  }
}

function validationPassword(password, passwordError, passwordPattern) {
  if (!passwordPattern.test(password.value)) {
    passwordError.textContent =
      "La contraseña ";
    passwordError.classList.add("error-message");
  } else {
    passwordError.textContent = "";
    passwordError.classList.remove("error-message");
  }
}

async function addUserToDatabase(email, password) {
  try {
    await db.collection("users").add({
      email: email.value,
      password: password.value,
    });
    document.getElementById("form").reset();
  } catch (error) {
    alert("Ocurrió un error: " + error.message);
    console.log(error);
  }
}
