//owl-carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel( {
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    nav: true
  });
});

//parallax
$(".main-header").parallax(
  {imageSrc: "img/bg-header.jpg"}
);

$(".client").parallax(
  {imageSrc: "img/bg-client.jpg"}
);

//mixitup
$('#filter').mixItUp();


//hamburger menu
var hamburger = document.querySelector(".js-hamburger");
var navList = document.querySelector(".main-nav__list");

hamburger.addEventListener("click", function(event) {
  event.preventDefault();
  navList.classList.toggle("main-nav__list--show");
})
