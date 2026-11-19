// Validation Bootstrap du formulaire de contact
(() => {
  "use strict";
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    form.classList.add("was-validated");
    const feedback = document.getElementById("formFeedback");
    feedback.innerHTML = '<div class="alert alert-success">Votre formulaire est valide. Pour recevoir réellement les messages, il faudra connecter ce formulaire à un backend ou à un service de formulaire.</div>';
    form.reset();
    form.classList.remove("was-validated");
  });
})();
