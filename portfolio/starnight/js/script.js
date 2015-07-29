var popup = document.querySelector(".modal-content"),
    play = document.querySelector(".promo-header__play"),
    overlay = document.querySelector(".overlay"),
    close = document.querySelector(".modal-content__close");

//окно с видео
play.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("overlay-show");
});

//закрытие окна по Х
close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("overlay-show");
});

//закрытие окна по ESC
window.addEventListener("keydown", function(event) {
  if(event.keyCode == 27) {
    if(popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("overlay-show");
    }
  }
});

//анимации
window.sr = new scrollReveal;

//owl carousel
$(function() {
    $(".owl-carousel").owlCarousel({
        loop: !0,
        items: 1,
        autoPlay: 5e3,
        responsive: !1
    })
});
