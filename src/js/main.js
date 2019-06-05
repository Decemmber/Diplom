/*slider*/
$(document).ready(function() {
   $('.multiple-items').slick({
       lazyLoad: 'ondemand',
       infinite: true,
       slidesToShow: 4,
       slidesToScroll: 2,
       arrows: false,
       dots: true,
       dotsClass: 'dots-style',
       responsive: [
           {
             breakpoint: 1024,
             settings: {
               slidesToShow: 3,
               slidesToScroll: 2,
             }
           },
           {
             breakpoint: 767,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 2
             }
           },
           {
             breakpoint: 480,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1
             }
           },
           {
               breakpoint: 479,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }       
           }]
     });

/*Scroll button*/
$(window).scroll(function () {
    if ($(this).scrollTop() != 0)
       $('#toTop').fadeIn();
    else
       $('#toTop').fadeOut();
 });
 $('#toTop').click(function () {
    $('body,html').animate({
       scrollTop: 0
    }, 800);
 });

 
 $('.menu-icon').click(function () {
  $('nav').slideToggle(500);
  $('.menu__items').css({
     'display': 'flex',
     'flex-direction': 'column'
  });

  if ($('.menu-icon').html() == '<i class="fas fa-times"></i>') {
     $(this).html('<i class="fas fa-bars"></i>');
  } else {
     $(this).html('<i class="fas fa-bars"></i>');
  }
});})

document.getElementById('send').addEventListener('click', takedata);
function takedata() {
  var login = document.getElementById('usermail').value;
  var pass = document.getElementById('userpass').value;
  console.log(login,pass);
}