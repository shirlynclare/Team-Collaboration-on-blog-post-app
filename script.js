const togglePassword = document.getElementById("toggle-password");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
  
});

const form = document.getElementById("my-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Validate the form fields
  if (name === "" || email === "") {
    alert("Please fill in all the fields.");
    return;
  }

  // Open the new HTML file in the same window
  window.location.href = "/signin.html?name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email);
});

const formta = document.getElementById("my-orm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Validate the form fields
  if (name === "" || email === "") {
    alert("Please fill in all the fields.");
    return;
  }

  // Open the new HTML file in the same window
  window.location.href = "/index.html?name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email);
});

 
