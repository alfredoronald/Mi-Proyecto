const firebaseConfig = {
    apiKey: "AIzaSyDDOHftgcWe-SQsjBu6bxRFO6MUg-a5k_k",
    authDomain: "mi-pagina-web-d8b39.firebaseapp.com",
    projectId: "mi-pagina-web-d8b39",
    storageBucket: "mi-pagina-web-d8b39.appspot.com",
    messagingSenderId: "60249625046",
    appId: "1:60249625046:web:66f1cb61fd407f952e9477",
    measurementId: "G-MQ64YCS1K7"
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
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{6,15}/;

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
      "La contraseña debe tener al menos 6 caracteres , números, mayúsculas y minúsculas";
    passwordError.classList.add("error-message");
  } else {
    passwordError.textContent = "";
    passwordError.classList.remove("error-message");
  }
}

async function addUserToDatabase(email, password) {
  try {
    await db.collection("Users").add({
      email: email.value,
      password: password.value,
    });
    document.getElementById("form").reset();
  } catch (error) {
    alert("Ocurrió un error: " + error.message);
    console.log(error);
  }
}
