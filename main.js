//Aggiungo la classe .active per far apparire il menu al click dell'hamburger

$('.header-right a:last-child').click(function() {
  $('.hamburger-menu').addClass('active');
})

//Rimuovo la classe.active per far sparire il menu al click della x

$('.hamburger-menu a:last-child').click(function() {
  $('.hamburger-menu').removeClass('active');
})
