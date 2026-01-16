const form = document.querySelector(".contact-form");
const status = document.querySelector("#form-status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;

  status.textContent = "Thanks, " + name + ". Your message has been received.";
});
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields!";
    status.style.color = "red";
    return;
  }

  status.textContent = "Thanks, " + name + ". Your message has been received.";
  status.style.color = "green";

  // Optional: clear the form
  form.reset();
});
