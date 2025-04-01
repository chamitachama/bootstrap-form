// Esperar el evento submit del formulario
document.addEventListener("DOMContentLoaded", function () {
    let forms = document.querySelectorAll(".needs-validation");
  
    Array.from(forms).forEach(function (form) {
      form.addEventListener("submit", function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      }, false);
    });
  });
  