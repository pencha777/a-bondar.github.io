
//Переменные блока пользователя
var loginLink = document.querySelector(".btn-login");
var logoutLink = document.querySelector(".btn-logout");
var loginBlock = document.querySelector(".login");
var userBlock = document.querySelector(".logout");

//Переменные окна "добавлено в корзину"
var basket = document.querySelector(".item-in-basket");
var linksBuy = document.querySelectorAll(".buy");
var basketClose = basket.querySelector(".close");
var continueShop = basket.querySelector(".continue");

// Popup "Товар добавлен в корзину"
for(i = 0; i < linksBuy.length; i++) {
  linksBuy[i].addEventListener("click", function(event) {
    event.preventDefault();
    basket.classList.add("in-basket-show");
  })
};
//закрытие попапа по Х
basketClose.addEventListener("click", function(event) {
  event.preventDefault();
  basket.classList.remove("in-basket-show");
});
//закрыnие попапа по кнопке "продолжить"
continueShop.addEventListener("click", function(event) {
  event.preventDefault();
  basket.classList.remove("in-basket-show");
});

//Форма пользователя
loginLink.addEventListener("click", function(event) {
  event.preventDefault();
  loginBlock.classList.add("user-block-hide");
  userBlock.classList.add("user-block-show");
});

logoutLink.addEventListener("click", function(event) {
  event.preventDefault();
  userBlock.classList.remove("user-block-show");
  loginBlock.classList.remove("user-block-hide");
});

if(document.querySelector(".write-us")) {
  //Переменные окна "Напишите нам" и карты
  var link = document.querySelector(".write-us-open");
  var popup = document.querySelector(".write-us");
  var close = document.querySelector(".write-us-close");
  var userName = popup.querySelector("[name='user-name']");
  var mapOpen = document.querySelector(".open-map");
  var mapPopup = document.querySelector(".map");
  var mapClose = mapPopup.querySelector(".map-close");

  mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("map-show");
  });

  mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("map-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
      if (mapPopup.classList.contains("map-show")) {
        mapPopup.classList.remove("map-show");
      }
    }
  });

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("write-us-show");
    userName.focus();
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("write-us-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
      if (popup.classList.contains("write-us-show")) {
        popup.classList.remove("write-us-show");
      }
    }
  });
};
  
