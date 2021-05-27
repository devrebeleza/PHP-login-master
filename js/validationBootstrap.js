
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// function validaCampos() {
//   'use strict';

//   // validación
//       var nombre = $("#name").val();
//       var email = $("#email").val();
//       var password = $("#password").val();
//       var passwordRepeat = $("#passwordRepeat").val();
//       //validamos campos
//       if($.trim(nombre) == ""){
//       toastr.error("No ha ingresado Nombre","Aviso!");
//         return false;
//       }
//                         if($.trim(edad) == ""){
//       toastr.error("No ha ingresado Edad","Aviso!");
//         return false;
//       }

//                 if(edad < 0){
//       toastr.error("Mínimo permitido 0","Aviso!");
//         return false;
//       }
//       if($.trim(direccion) == ""){
//       toastr.error("No ha ingresado Dirección","Aviso!");
//         return false;
//       }

//       }
//   // fin validación
//   window.addEventListener('load', function() {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
//   return false;
// }
