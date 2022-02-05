$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });


  // VALIDACION DE FORMULARIO
var formulario = document.getElementById("formulario");

function validar(e) {
     var  inputNombre = document.getElementById("nombre"),
          inputEmail = document.getElementById("email"),
          inpuComents = document.getElementById("comentarios"),
          alertError = document.getElementById("alertError"),
          alertSuccess = document.getElementById("alertSuccess");
          

     if (inputNombre.value == 0 || inputEmail.value == 0 || inpuComents.value == 0) {
          e.preventDefault();
          alertError.classList.remove("hide");
          alertError.classList.add("show");

          setTimeout(function() {
               alertError.classList.remove("show");
               alertError.classList.add("hide"); 
          }, 2000);     
     }else{
          e.preventDefault();
          alertSuccess.classList.remove("hide");
          alertSuccess.classList.add("show");

          setTimeout(function() {
               alertSuccess.classList.remove("show");
               alertSuccess.classList.add("hide"); 
          }, 2000);               
          inputNombre.value = "";
          inputEmail.value = "";
          inpuComents.value = "";
     }
};


// Eventos del formulario
formulario.addEventListener("submit", validar);
